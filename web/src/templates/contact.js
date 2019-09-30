import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';
import TextImage from '../components/TextImage';
import MainHeading from '../components/MainHeading';

export default ({ pageContext, location }) => {
  const { sanityContact } = useStaticQuery(
    graphql`
      {
        sanityContact(_id: { eq: "contact" }) {
          heading
          _rawSeo(resolveReferences: { maxDepth: 5 })
          offices {
            name
            _id
            _rawOfficeInfo
            image {
              ...ImageFragment
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
  const seo = sanityContact?._rawHomePageSeo || null;

  return (
    <>
      <SEO seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading>{heading}</MainHeading>

        {offices.map(office => (
          <div className="pb-8 md:pb-16" key={office._id}>
            <TextImage image={office.image} alt={office.name} square>
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
            square
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
