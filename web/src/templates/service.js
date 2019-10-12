import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Link from '../components/Link';
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
    services: allSanityService {
      nodes {
        id
        title
        slug {
          current
        }
      }
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
  const ourServices = data?.services?.nodes || [];
  const featuredCases = data?.featuredCases?.nodes || null;
  
  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <section>
          <h1 className="text-xl -mt-2">{title}</h1>
          {ourServices && (
            <ul className="mt-8">
              {ourServices.map((service) => (
                <li key={service.id} className="inline-block border -ml-px-2 -mt-px-2">
                  {pageContext.id === service.id ? (
                    <div className="px-2 py-2 bg-green">
                      {service.title}
                    </div>
                  ) : service.slug?.current ? (
                    <Link slug={service.slug.current} title={service.title} className="block px-2 py-2 hover:bg-green focus:bg-green">
                      {service.title}
                    </Link>
                  ) : (
                    <div className="px-2 py-2">
                      {service.title}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
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
