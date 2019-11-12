import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Link from '../components/Link';
import Layout from '../containers/layout';
import TextImageIntroContainer from '../containers/TextImageIntroContainer';
import FeaturedContainer from '../containers/FeaturedContainer';
import ContactSection from '../components/ContactSection';

// Non static query, see $id
export const query = graphql`
  query($id: String!) {
    page: sanityService(id: { eq: $id }) {
      title
      featuredTitle
      slug {
        current
      }
      _rawSeo
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
    servicesTitle: sanityOurServices {
      heading
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
      },
      limit: 4) {
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
            aspectRatio
          }
        }
    }
    site: sanitySiteSettings {
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
`;

export default ({ data, pageContext, location }) => {
  const {
    title: title = '',
    _rawSeo: seo = null,
    _rawAdditionalContent: textImage = null,
    featuredTitle: featuredTitle = null,
  } = data?.page;
  const ourServices = data?.services?.nodes || [];
  const featuredCases = data?.featuredCases?.nodes || null;

  const {
    form: form = null,
    persons: persons = [],
    title: heading = null,
  } = data?.site?.contactBlock;
  
  const { heading : servicesTitle = null } = data?.servicesTitle;

  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb} currentPage={title}>
        <section>
          <h1 className="text-xl -mt-2">{servicesTitle ? servicesTitle : title}</h1>
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
          {featuredCases && (
            <section className="mb-16">
              {featuredTitle && <h2 className="text-xl mb-16">{featuredTitle}</h2>}
              <FeaturedContainer posts={featuredCases} />
            </section>
          )}
        </section>
        {persons && form && (
          <div className="mt-16 py-16 border-solid border-black border-t">
            <ContactSection heading={heading} persons={persons} form={form} />
          </div>
        )}
      </Layout>
    </>
  );
};
