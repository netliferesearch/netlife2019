import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';
import TextImage from '../components/TextImage';

export default ({ pageContext }) => {
  const { sanityContact } = useStaticQuery(
    graphql`
      {
        sanityContact(_id: { eq: "contact" }) {
          heading
          offices {
            name
            _rawOfficeInfo
            image {
              hotspot {
                y
                x
                width
                height
                _type
                _key
              }
              crop {
                top
                right
                left
                bottom
                _type
                _key
              }
              asset {
                _id
              }
            }
          }
          _rawAdditionalContent
        }
      }
    `
  );

  const heading = sanityContact?.heading || '';
  const offices = sanityContact?.offices || [];
  const additionalImage = sanityContact?._rawAdditionalContent?.image || {};
  const additionalImageAlt = sanityContact?._rawAdditionalContent?.alt || '';
  const additionalTextContent =
    sanityContact?._rawAdditionalContent?.textContent || [];
  const additionalImageLeft =
    sanityContact?._rawAdditionalContent?.imageLeft || false;

  return (
    <>
      <SEO title={'Kontakt'} description={heading} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <h1 className="text-xl">{heading}</h1>

        {offices.map(office => (
          <div className="py-8 md:py-16">
            <TextImage image={office.image} alt={office.name} aspectRatio="1:1">
              <h2 className="text-lg mb-4 -mt-2">{office.name}</h2>
              <PortableText blocks={office._rawOfficeInfo} />
            </TextImage>
          </div>
        ))}
        <div className="pt-16">
          <TextImage
            image={additionalImage}
            alt={additionalImageAlt}
            imageLeft={additionalImageLeft}
            aspectRatio="1:1"
          >
            <div className="rich-text">
              <PortableText blocks={additionalTextContent} />
            </div>
          </TextImage>
        </div>
      </Layout>
    </>
  );
};
