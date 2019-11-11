import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
import TextImageIntroContainer from '../containers/TextImageIntroContainer';
import FeaturedContainer from '../containers/FeaturedContainer';
import Link from '../components/Link';
import ContactSection from '../components/ContactSection';

export default ({ pageContext, location }) => {
  const { page, services, contact } = useStaticQuery(
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
        contact: sanitySiteSettings {
          contactBlock {
            _key
            _type
            title
            persons {
              _id
              name
              email
              role
              services {
                name
              }
              phoneNumber
              image {
                ...ImageFragment
              }
              slug {
                current
              }
            }
            form {
              submitButtonText
              formFields {
                ... on SanityFormFieldText {
                  _key
                  _type
                  description
                  errorMessage
                  label
                  required
                  type
                }
                ... on SanityFormFieldSelection {
                  _key
                  _type
                  description
                  errorMessage
                  items
                  label
                  required
                  type
                }
              }
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
  const {
    form: form = null,
    persons: persons = [],
    title: formHeading = null,
  } = contact?.contactBlock;

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
        {persons && (
          <div className="mt-16 py-16 border-solid border-black border-t">
            <ContactSection heading={formHeading} persons={persons} form={form} />
          </div>
        )}
      </Layout>
    </>
  );
};
