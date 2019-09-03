import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/portableText';
import TextImage from '../components/TextImage';

export const query = graphql`
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
`;

const ContactTemplate = props => {
  const { data, pageContext, errors } = props;

  const {
    heading: heading = '',
    offices: offices = [],
    _rawAdditionalContent: {
      alt: alt = '',
      image: image = {},
      textContent: textContent = [],
      imageLeft: imageLeft = false
    } = {}
  } = data.sanityContact;

  return (
    <>
      <SEO title={'Kontakt'} description={heading} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        {errors && <SEO title="GraphQL Error" />}
        <h1 className="text-xl">{heading}</h1>

        {errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )}

        {offices.map(office => (
          <div className="py-8 md:py-16">
            <TextImage image={office.image} alt={office.name} square>
              <h2 className="text-lg mb-4 -mt-2">{office.name}</h2>
              <PortableText blocks={office._rawOfficeInfo} />
            </TextImage>
          </div>
        ))}
        <div className="pt-16">
          <TextImage image={image} alt={alt} imageLeft={imageLeft} square>
            <div className="rich-text">
              <PortableText blocks={textContent} />
            </div>
          </TextImage>
        </div>
      </Layout>
    </>
  );
};

export default ContactTemplate;
