import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';
import MainHeading from '../components/MainHeading';

// Non static query, see $id
export const query = graphql`
  query($id: String!) {
    sanityArticle(id: { eq: $id }) {
      title
      _rawText(resolveReferences: { maxDepth: 10 })
      _rawSeo(resolveReferences: { maxDepth: 5 })
    }
  }
`;

export default ({ data, location }) => {
  const {
    title: title = '',
    _rawText: { textContent: textContent = null } = {},
    _rawSeo: seo = null
  } = data?.sanityArticle;

  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout>
        <MainHeading>{title}</MainHeading>
        <section className="mx-auto w-full sm:w-3/4 lg:w-1/2">
          <PortableText blocks={textContent} />
        </section>
      </Layout>
    </>
  );
};
