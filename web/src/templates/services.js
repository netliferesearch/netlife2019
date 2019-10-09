import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
import Image from '../components/Image';
import PortableText from '../components/PortableText';

export default ({ pageContext, location }) => {
  const { page, services } = useStaticQuery(
    graphql`
      query {
        page: sanityOurServices {
          title
          heading
          _rawSeo(resolveReferences: { maxDepth: 5 })
          _rawAdditionalContent(resolveReferences: { maxDepth: 5 })
        }
        services: allSanityService {
          nodes {
            title
            slug {
              current
            }
            id
          }
        }
      }
    `
  );

  const seo = page?._rawSeo || null;
  const additionalContent = page?._rawAdditionalContent || null;
  const title = page?.title || '';
  const heading = page?.heading || '';
  const ourServices = services?.nodes || [];

  return (
    <>
      <SEO title={title} description="" seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading tight>{heading}</MainHeading>
        {ourServices && (
          <ul>
            {ourServices.map((service) => (
              <li key={service.id} className="inline-block border -ml-px-2 -mt-px-2">
                {service.slug?.current ? (
                  <a href={service.slug.current} title={service.title} className="block px-2 py-2 hover:bg-green focus:bg-green">
                    {service.title}
                  </a>
                ) : (
                  <div className="px-2 py-2">
                    {service.title}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
        {additionalContent && (
          <section className="border-t border-b mt-8 mb-8 py-4 md:py-8">
            <div className="md:flex -mx-4">
              {additionalContent.map(c => (
                <div className="w-full md:w-1/2 px-4">
                  {c._type === 'richText' && (
                    <React.Fragment key={c.key}>
                      <PortableText blocks={c.textContent} />
                    </React.Fragment>
                  )}
                  {c._type === 'textImage' && (
                    <React.Fragment key={c.key}>
                      <Image
                        image={c.image}
                        alt={c.alt}
                        aspectRatio={c.aspectRatio}
                        imageText={c.imageText}
                      />
                    </React.Fragment>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </Layout>
    </>
  );
};
