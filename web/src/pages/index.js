import React from 'react';
import { graphql } from 'gatsby';
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import Illustration from '../assets/sms-dialog.svg';

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 pt-0 md:pt-8">
          <nav>
            <a href="#" className="block text-lg hover:text-green-dark">
              Ting vi gjør
            </a>
            <a href="#" className="block text-lg hover:text-green-dark">
              Hvem vi er
            </a>
            <a href="#" className="block text-lg hover:text-green-dark">
              Kurs og konferanser
            </a>
            <a href="#" className="block text-lg hover:text-green-dark">
              Folka i Netlife
            </a>
            <a href="#" className="block text-lg hover:text-green-dark">
              Kontakt
            </a>
          </nav>
        </div>
        <div className="w-full md:w-1/2 text-left md:text-right">
          <img
            src={Illustration}
            alt=""
            className="h-64 inline-block my-8 md:my-0"
          />
        </div>
      </div>
      {/*postNodes && (
          <BlogPostPreviewList
            title="Latest blog posts"
            nodes={postNodes}
            browseMoreHref="/archive/"
          />
        )*/}
    </Layout>
  );
};

export default IndexPage;
