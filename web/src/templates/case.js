import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';
import Image from '../components/Image';

// Non static query, see $id
export const query = graphql`
  query($id: String!) {
    sanityCases(id: { eq: $id }) {
      title
      _rawIngress(resolveReferences: { maxDepth: 10 })
      slug {
        current
      }
      mainImage {
        image {
          ...ImageFragment
        }
        alt
      }
      _rawContent(resolveReferences: { maxDepth: 10 })
      _rawSeo(resolveReferences: { maxDepth: 5 })
    }
  }
`;

export default ({ data, pageContext, location }) => {
  const {
    title: title = '',
    _rawIngress: textContent = [],
    _rawContent: content = [],
    mainImage: { image: mainImage = null, alt: mainImageAlt = '' },
    _rawSeo: seo = null,
  } = data?.sanityCases;

  return (
    <>
      {textContent && <p>hej</p>}
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <article>
          <h1 className="text-xl -mt-2 mb-4">{title}</h1>
          <div className="mb-16">
            {textContent && <PortableText blocks={textContent} />}
          </div>
          <div className="mb-16">
            {mainImage && <Image image={mainImage} alt={mainImageAlt} />}
          </div>
          {content && content.map(c => <PortableText key={c._key} blocks={c.textContent} />)}
        </article>
      </Layout>
    </>
  );
};
