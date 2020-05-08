import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
import TextImageIntroContainer from '../containers/TextImageIntroContainer';
import FeaturedContainer from '../containers/FeaturedContainer';
import Link from '../components/Link';
import ContactSection from '../components/ContactSection';
import PortableText from '../components/PortableText'
import Image from '../components/Image'
import path from 'path';
import { showTemplateName } from '../lib/showTemplateNameUtil';
const templateName = path.basename(__filename);

export default ({ pageContext, location }) => {
  showTemplateName(templateName);
  const { page, contact } = useStaticQuery(
    graphql`
      query {
        page:   sanityOurServices {
          heading
          intro
          _rawContent
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

  const {
    heading: heading = '',
    _rawContent: content = [],
  } = page
  const seo = page?._rawSeo || null;
  const intro = page?.intro || '';
  const {
    form: form = null,
    persons: defaultContactPersons = [],
    title: defaultContactTitle = null,
  } = contact?.contactBlock;

  return (
    <>
      <SEO title={heading} description="" seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>


        <article>

          <section className="w-3/4">
            <MainHeading tight>{heading}</MainHeading>
            <section className="w-2/5">{intro}</section>
          </section>

          <section className="w-full mt-16 border-solid border-black border-t">
            {content &&
              content.map(c => {
                if (c._type === 'richText') {
                  return (
                    <div
                      className="my-8 md:my-16 md:w-2/3 xl:w-1/2 mx-auto "
                      key={c._key}
                    >
                      <div>
                        {c?.heading && (
                          <h2 className="text-md mb-4">{c.heading}</h2>
                        )}
                        <PortableText blocks={c.textContent} />
                      </div>
                    </div>
                  )
                } else if (c._type === 'imageObject' && c.image?.asset) {
                  return (
                    <div className="my-8 md:my-16 mx-auto" key={c._key}>
                      <Image
                        image={c.image}
                        alt={c.image?.alt}
                        aspectRatio={c?.aspectRatio}
                      />
                    </div>
                  );
                } else if (c._type === "richTextX4") {
                  return (
                    <div className="flex flex-wrap" >
                      {c.textContent.map(x4Block => {
                        return (
                          <div key={x4Block._key} className="pl-16 pr-16 my-8 w-full md:w-full lg:w-1/2 ">
                            {x4Block?.heading && (
                              <h2 className="text-md mb-4">{x4Block.heading}</h2>
                            )}
                            <PortableText blocks={x4Block.textContent} />
                          </div>
                        )
                      })}
                    </div>
                  )
                }
              })}
          </section>

        </article>

        {form && (
          <div className="mt-16 py-16 border-solid border-black border-t">
            <ContactSection
              form={form}
              heading={defaultContactTitle}
              persons={defaultContactPersons}
            />
          </div>
        )}
      </Layout>
    </>
  );
};
