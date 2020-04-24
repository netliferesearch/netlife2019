import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
import { isBrowser } from 'react-device-detect';
import PortableText from '../components/PortableText';
import TextImageScroll from '../components/TextImageScroll';
import TextImage from '../components/TextImage';
import Image from '../components/Image';
import ContactSection from '../components/ContactSection';
import Video from '../components/Video';

export default ({ pageContext, location }) => {
  const { sanityAbout, contact } = useStaticQuery(
    graphql`
      {
        sanityAbout {
          title
          intro
          _rawSeo(resolveReferences: { maxDepth: 5 })
          videoId
          _rawContent(resolveReferences: { maxDepth: 5 })
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

  const title = sanityAbout?.title || '';
  const intro = sanityAbout?.intro || '';
  const seo = sanityAbout?._rawSeo || null;
  const videoId = sanityAbout?.videoId || '';
  const content = sanityAbout?._rawContent || [];

  const {
    form: form = null,
    persons: defaultContactPersons = [],
    title: defaultContactTitle = null
  } = contact?.contactBlock;

  return (
    <>
      <SEO title={title} description={intro} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading>{title}</MainHeading>
        {isBrowser && videoId ? (
          <Video id={videoId} placeholder isLarge />
        ) : (
          <hr />
        )}
        <section className="mt-16">
          {intro && <h2 className="mt-16 text-md md:w-3/4">{intro}</h2>}
          {content.map(c => {
            /* We need to use the raw field to render this objects block field */
            if (c._type === 'textImage') {
              return (
                <div className="w-full md:w-2/3 mx-auto" key={c._key}>
                  <div className="my-8 md:my-16">
                    <TextImage
                      image={c.image}
                      alt={c.alt}
                      imageLeft={c.imageLeft}
                    >
                      <h2 className="text-md mb-4 -mt-2">{c.name}</h2>
                      <PortableText blocks={c.textContent} />
                    </TextImage>
                  </div>
                </div>
              );
            } else if (c._type === 'textImageScroll') {
              return (
                <div className="my-8 md:my-16" key={c._key}>
                  <TextImageScroll images={c.images}>
                    <h2 className="text-md mb-4 -mt-2">{c.name}</h2>
                    <PortableText blocks={c.textContent} />
                  </TextImageScroll>
                </div>
              );
            } else if (c._type === 'articleImage') {
              return (
                <div className="my-8 md:my-16" key={c._key}>
                  {c?.image?.asset && (
                    <Image
                      image={c.image}
                      alt={c.alt}
                      aspectRatio={c.aspectRatio}
                      imageText={c.imageText}
                    />
                  )}
                </div>
              );
            } else if (c._type === 'richText') {
              return (
                <div className="my-8 md:my-16 md:w-1/2 mx-auto" key={c._key}>
                  <PortableText blocks={c.textContent} />
                </div>
              );
            }
            return null;
          })}
        </section>
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
