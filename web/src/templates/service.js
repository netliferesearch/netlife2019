import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';
import Image from '../components/Image';
import TextImage from '../components/TextImage';

// Non static query, see $id
export const query = graphql`
  query($id: String!) {
    sanityService(id: { eq: $id }) {
      title
      slug {
        current
      }
    }
  }
`;

export default ({ data, pageContext, location }) => {
  const {
    title: title = '',
    _rawSeo: seo = null,
  } = data?.sanityService;

  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <article>
          <h1 className="text-xl -mt-2 mb-4">{title}</h1>
          <div className="mb-16">

          </div>
          <div className="mb-16">

          </div>
        </article>
      </Layout>
    </>
  );
};
