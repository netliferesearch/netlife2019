import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';
import Image from '../components/Image';
import Link from '../components/Link';

// Non static query, see $id
export const query = graphql`
  query($id: String!) {
    sanityCases(id: { eq: $id }) {
      title
      slug {
        current
      }
      mainImage {
        image {
          ...ImageFragment
        }
        alt
      }
      serviceCategories {
        id
        title
        slug {
          current
        }
      }
      _rawArticle(resolveReferences: { maxDepth: 10 })
      _rawSeo(resolveReferences: { maxDepth: 5 })
    }
  }
`;

export default ({ data, pageContext, location }) => {
  const {
    title: title = '',
    mainImage: { image: mainImage = null, alt: mainImageAlt = '' },
    _rawArticle: { textContent: textContent = null } = {},
    _rawSeo: seo = null,
    serviceCategories: serviceCategories = [],
  } = data?.sanityCases;

  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <div className="w-full max-w-full lg:max-w-lg mx-auto">
          <article>
            <h1 className="text-xl -mt-2 mb-4">{title}</h1>
            {mainImage && <Image image={mainImage} alt={mainImageAlt} />}
            <section className="mt-12">
              <PortableText blocks={textContent} />
            </section>
          </article>
          <section className="border-t mt-8 pt-8">
            <h2 className="text-lg mb-2">Tjenester vi tilbyr:</h2>
            <ul>
              {serviceCategories.map(service => (
                <li className="list-disc ml-4" key={service.id}>
                  {service.slug?.current ? (
                    <Link
                      slug={service.slug?.current}
                      className="font-lining link"
                    >
                      {service.title}
                    </Link>
                  ) : service.title }
                  
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Layout>
    </>
  );
};
