import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import TextImageIntroContainer from '../containers/TextImageIntroContainer';
import FeaturedCasesContainer from '../containers/FeaturedCasesContainer';

// Non static query, see $id
export const query = graphql`
  query($id: String!) {
    page: sanityService(id: { eq: $id }) {
      title
      slug {
        current
      }
      _rawAdditionalContent
    }
    featuredCases: allSanityCases(
      filter: {
        serviceCategories: {
          elemMatch: {
            id: {
              eq: $id
            }
          }
        }
      }) {
        nodes {
          id
          title
          slug {
            current
          }
          _rawIntro(resolveReferences: { maxDepth: 5 })
          mainImage {
            image {
              ...ImageFragment
            }
            alt
          }
        }
    }
  }
`;

export default ({ data, pageContext, location }) => {
  const {
    title: title = '',
    _rawSeo: seo = null,
    _rawAdditionalContent: textImage = null,
  } = data?.page;

  const featuredCases = data?.featuredCases?.nodes || null;

  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <section>
          <h1 className="text-xl -mt-2">{title}</h1>
          {textImage?.image && textImage?.textContent && (
            <TextImageIntroContainer
              image={textImage?.image}
              alt={textImage?.alt}
              imageLeft={textImage?.imageLeft}
              isHalf
              textContent={textImage?.textContent}
            />
          )}
          {featuredCases && <FeaturedCasesContainer featuredCases={featuredCases} />}
        </section>
      </Layout>
    </>
  );
};
