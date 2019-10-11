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
    _rawIngress: ingress = null,
    _rawContent: content = [],
    mainImage: { image: mainImage = null, alt: mainImageAlt = '' },
    _rawSeo: seo = null
  } = data?.sanityCases;

  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <article>
          <h1 className="text-xl -mt-2 mb-4">{title}</h1>
          <div className="mb-16">
            {ingress?.textContent && (
              <PortableText blocks={ingress.textContent} />
            )}
          </div>
          <div className="mb-16">
            {mainImage && <Image image={mainImage} alt={mainImageAlt} />}
          </div>
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
                      <h2 className="text-lg mb-4">{c.name}</h2>
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
              }
              return '';
            })}
        </article>
      </Layout>
    </>
  );
};
