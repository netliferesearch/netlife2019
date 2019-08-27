import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/portableText';
import TextImage from '../components/TextImage';

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  {
    sanityContact {
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
    }
  }
`;

const ContactTemplate = props => {
  const { data, errors } = props;

  const { heading, offices } = data.sanityContact;

  return (
    <>
      <SEO title={'Kontakt'} description={heading} />
      <Layout>
        {errors && <SEO title="GraphQL Error" />}
        <h1 className="text-xl">{heading}</h1>

        {errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )}

        {offices.map(office => (
          <div className="mt-12">
            <TextImage image={office.image} alt={office.name} square>
              <h2 className="text-lg mb-4 -mt-2">{office.name}</h2>
              <PortableText blocks={office._rawOfficeInfo} />
            </TextImage>
          </div>
        ))}
      </Layout>
    </>
  );
};

export default ContactTemplate;
