import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
import TextImageIntroContainer from '../containers/TextImageIntroContainer';
import FeaturedContainer from '../containers/FeaturedContainer';
import Link from '../components/Link';
import TextImage from '../components/TextImage';
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
          _rawAdditionalContent
          additionalContent {
            ... on SanityContactSection {
              _key
              _type
            }
            ... on SanityCustomEvent {
              _key
              _type
            }
            ... on SanityTextImage {
              _key
              _type
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

  const {
    heading: heading = '',
    _rawContent: content = [],
    _rawAdditionalContent: _rawAdditionalContent = [],
    additionalContent: additionalContent = []
  } = page
  const seo = page?._rawSeo || null;
  const intro = page?.intro || '';
  const { form: form = null } = contact?.contactBlock;

  return (
    <>
      <SEO title={heading} description="" seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>


        <article>

          <section className="w-full md:w-3/4">
            <MainHeading tight>{heading}</MainHeading>
            <section className="w-full md:w-2/5">{intro}</section>
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
                      {c.textContent.map(x4Block => (
                        <div key={x4Block._key} className="w-full my-4 md:pl-16 md:pr-16 md:my-8 lg:w-1/2 ">
                          {x4Block?.heading && (
                            <h2 className="text-md mb-4">{x4Block.heading}</h2>
                          )}
                          <PortableText blocks={x4Block.textContent} />
                        </div>
                      )
                      )}
                    </div>
                  )
                }
                return null;
              })}
          </section>

        </article>

        {additionalContent.map(content => {
          /* We need to use the raw field to render this objects block field */
          if (content._type === 'textImage') {
            const rawContent = _rawAdditionalContent.find(
              x => x._key === content._key
            );

            if (!rawContent) return null;

            return (
              <div className="py-8 md:py-16" key={content._key}>
                <TextImage
                  image={rawContent.image}
                  alt={rawContent.alt}
                  imageLeft={rawContent.imageLeft}
                >
                  <h2 className="text-md mb-4 -mt-2">{rawContent.name}</h2>
                  <PortableText blocks={rawContent.textContent} />
                </TextImage>
              </div>
            );
          } else if (content._type === 'customEvent') {
            const rawContent = _rawAdditionalContent.find(
              x => x._key === content._key
            );

            if (!rawContent) return null;

            const {
              alt,
              aspectRatio,
              image,
              isHalf = true,
              imageLeft,
              imageText,
              title,
              text,
            } = rawContent;

            return (
              <div className="py-8 md:py-16 border-t border-b border-solid border-black" key={content._key}>
                <TextImage
                  alt={alt}
                  aspectRatio={aspectRatio}
                  image={image}
                  isHalf={isHalf}
                  imageLeft={imageLeft}
                  imageText={imageText}
                >
                  <h2 className="text-md mb-4 mt-4">{title}</h2>
                  <PortableText blocks={text} />
                </TextImage>
              </div>
            );
          } else if (content._type === 'contactSection') {
            const rawContent = _rawAdditionalContent.find(
              x => x._key === content._key
            );

            if (!rawContent) return null;

            const {
              title,
              persons
            } = rawContent;
            return (
              <>
                {form && (
                  <div className="mt-16 py-4">
                    <ContactSection
                      form={form}
                      heading={title}
                      persons={persons}
                    />
                  </div>
                )}
              </>
            )
          }
          return null;
        })}

      </Layout>
    </>
  );
};
