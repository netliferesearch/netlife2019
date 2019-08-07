import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import { toPlainText } from '../lib/helpers';
import PortableText from '../components/portableText';
import Img from 'gatsby-image';

export const query = graphql`
  {
    sanityContact {
      heading
      offices {
        name
        _rawOfficeInfo
        image {
          asset {
            fluid(maxWidth: 1706) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      _rawPitch
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
          <section className="flex flex-wrap mt-12 -mx-4">
            <div className="w-full order-2 md:order-1 md:w-1/3 px-4">
              <h2 className="text-lg mt-6 md:mt-0 mb-4 leading-extra-none">
                {office.name}
              </h2>
              <PortableText blocks={office._rawOfficeInfo} />
            </div>
            <div className="w-full order-1 md:order-2 md:w-2/3 px-4">
              <Img fluid={office.image.asset.fluid} />
            </div>
          </section>
        ))}
      </Layout>
    </>
  );
};

export default ContactTemplate;
