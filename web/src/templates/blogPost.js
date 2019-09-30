import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';
import Image from '../components/Image';
import { formatFullDate } from '../lib/formatDates/formatDates';

// Non static query, see $id
export const query = graphql`
  query($id: String!) {
    sanityBlogPost(id: { eq: $id }) {
      title
      publishDate
      slug {
        current
      }
      mainImage {
        image {
          ...ImageFragment
        }
        alt
      }
      _rawArticle(resolveReferences: { maxDepth: 10 })
      _rawSeo(resolveReferences: { maxDepth: 5 })
      author {
        name
        image {
          ...ImageFragment
        }
        services {
          name
        }
        slug {
          current
        }
        role
      }
    }
  }
`;

export default ({ data, pageContext, location }) => {
  const {
    title: title = '',
    mainImage: { image: mainImage = null, alt: mainImageAlt = '' },
    _rawArticle: { textContent: textContent = null } = {},
    _rawSeo: seo = null,
    publishDate: publishDate = ''
  } = data?.sanityBlogPost;

  return (
    <>
      <SEO seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <div className="w-full max-w-full lg:max-w-lg mx-auto">
          <h1 className="text-xl -mt-2 mb-4">{title}</h1>
          <div className="mb-6">
            Publisert:{' '}
            <date timedate={publishDate}>{formatFullDate(publishDate)}</date>
          </div>
          {mainImage && <Image image={mainImage} alt={mainImageAlt} />}
          <section className="mt-12">
            <PortableText blocks={textContent} />
          </section>
        </div>
      </Layout>
    </>
  );
};
