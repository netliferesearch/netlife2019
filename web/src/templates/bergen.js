import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { isBrowser } from 'react-device-detect';

import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
import TextImage from '../components/TextImage';
import PortableText from '../components/PortableText';
import Image from '../components/Image';
import Video from '../components/Video';
import ContactSection from '../components/ContactSection';

export default ({ pageContext, location }) => {
  const { sanityOffice } = useStaticQuery(
    graphql`
      {
        sanityOffice(id: { eq: "df205d97-d092-575e-bf60-60af19723e28" }) {
          name
          slug {
            current
          }
          _rawSeo(resolveReferences: { maxDepth: 5 })
          _rawOfficeArticle(resolveReferences: { maxDepth: 5 })
          _rawContactSection(resolveReferences: { maxDepth: 5 })
          image {
            ...ImageFragment
          }
          contactSection {
            title
            persons {
              email
              name
              role
              phoneNumber
              services {
                name
              }
              image {
                ...ImageFragment
              }
            }
            form {
              formFields {
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
                ... on SanityFormFieldText {
                  _key
                  _type
                  description
                  errorMessage
                  label
                  required
                  type
                }
              }
              _type
              submitButtonText
            }
          }
        }
      }
    `
  );

  const {
    name: name = '',
    slug: slug = 'default',
    _rawSeo: seo = null,
    _rawOfficeArticle: content = null,
    _rawContactSection: contactExtra = null
  } = sanityOffice;

  const {
    form: form = null,
    persons: defaultContactPersons = [],
    title: defaultContactTitle = null
  } = sanityOffice?.contactSection;

  return (
    <>
      <SEO
        title={name}
        description={seo?.description || ''}
        seo={seo}
        location={location}
      />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading>{name}</MainHeading>
        <div className="mb-16">
          {content &&
            content.map(c => {
              /* We need to use the raw field to render this objects block field */
              if (c._type === 'textImage') {
                return (
                  <div className="my-8 md:my-16" key={c._key}>
                    <TextImage
                      image={c.image}
                      alt={c.alt}
                      imageLeft={c.imageLeft}
                      isHalf
                    >
                      <h2 className="text-md mb-4">{c.name}</h2>
                      <PortableText blocks={c.textContent} />
                    </TextImage>
                  </div>
                );
              } else if (c._type === 'richText') {
                return (
                  <div className="my-8 md:my-16 md:w-2/3 mx-auto" key={c._key}>
                    <PortableText blocks={c.textContent} />
                  </div>
                );
              } else if (c._type === 'imageObject' && c.image?.asset) {
                return (
                  <div className="my-8 md:w-3/4 mx-auto" key={c._key}>
                    <Image image={c.image} alt={c.image?.alt} />
                  </div>
                );
              } else if (c._type === 'videoObject') {
                return (
                  <div className="my-8 md:w-3/4 mx-auto" key={c._key}>
                    {isBrowser && c?.video?.asset?.playbackId && (
                      <Video id={c.video.asset.playbackId} placeholder={true} />
                    )}
                  </div>
                );
              }
              return null;
            })}
        </div>
        {form && (
          <div className="pt-16 border-solid border-black border-t">
            <ContactSection
              form={form}
              formName={slug?.current}
              heading={defaultContactTitle}
              intro={contactExtra?.contactIntro}
              persons={defaultContactPersons}
            />
          </div>
        )}
      </Layout>
    </>
  );
};
