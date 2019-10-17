import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
import TextImageIntroContainer from '../containers/TextImageIntroContainer';
import FeaturedContainer from '../containers/FeaturedContainer';
import Link from '../components/Link';

export default ({ pageContext, location }) => {
  const { page, services } = useStaticQuery(
    graphql`
      query {
        page: sanityOurServices {
          title
          heading
          _rawSeo(resolveReferences: { maxDepth: 5 })
          _rawAdditionalContent(resolveReferences: { maxDepth: 5 })
          featuredCases {
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
        services: allSanityService {
          nodes {
            id
            title
            slug {
              current
            }
          }
        }
      }
    `
  );

  const seo = page?._rawSeo || null;
  const additionalContent = page?._rawAdditionalContent || null;
  const featuredCases = page?.featuredCases || null;
  const title = page?.title || '';
  const heading = page?.heading || '';
  const ourServices = services?.nodes || [];

  return (
    <>
      <SEO title={title} description="" seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading tight>{heading}</MainHeading>
        {ourServices && (
          <ul>
            {ourServices.map((service) => (
              <li key={service.id} className="inline-block border -ml-px-2 -mt-px-2">
                {service.slug?.current ? (
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
        {additionalContent && (
          <TextImageIntroContainer
            image={additionalContent?.image}
            alt={additionalContent?.alt}
            imageLeft={additionalContent?.imageLeft}
            isHalf
            textContent={additionalContent?.textContent}
          />
        )}
        {featuredCases && (
          <section className="mb-16">
            <FeaturedContainer posts={featuredCases} />
          </section>
        )}
      </Layout>
    </>
  );
};
