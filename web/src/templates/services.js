import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
import Image from '../components/Image';
import PortableText from '../components/PortableText';
import TextImage from '../components/TextImage';
import Link from '../components/Link';

const renderCaseContent = (data, index) => {

  const { title, slug, mainImage } = data;

  let wrapperClass = '';
  let contentClass = '';

  switch(index) {
    case 0:
        wrapperClass = 'mb-20 md:px-16';
        contentClass = 'mt-12';
      break;
    case 3:
        wrapperClass = 'flex flex-col md:px-16';
        contentClass = 'mb-12';
      break;
    default:
      break;

  }

  return index === 0 || index === 3 ? (
    <div className={wrapperClass}>
      <figure className={index === 3 ? ' order-1' : ''}>
        <Image
          image={mainImage.image}
          alt={mainImage.alt}
        />
      </figure>
      <div className={contentClass}>
        <h3 className="text-lg">
          <Link className="font-lining link" slug={slug.current} title={title}>{title}</Link>
        </h3>
        {data._rawIngress?.textContent && <PortableText blocks={data._rawIngress?.textContent} />}
      </div>
    </div>
  ) : (
    <div className="mb-20">
      <TextImage
        image={mainImage.image}
        alt={mainImage.alt}
        imageLeft={index === 2}
      >
        <h3 className="text-lg">
        <Link className="font-lining link" slug={slug.current} title={title}>{title}</Link>
        </h3>
        {data._rawIngress?.textContent && <PortableText blocks={data._rawIngress?.textContent} />}
      </TextImage>
    </div>
  );
};

export default ({ pageContext, location }) => {
  const { page, services } = useStaticQuery(
    graphql`
      query {
        page: sanityOurServices {
          title
          heading
          _rawSeo(resolveReferences: { maxDepth: 5 })
          _rawAdditionalContent(resolveReferences: { maxDepth: 5 })
          featuredCases {
            id
            title
            slug {
              current
            }
            _rawIngress(resolveReferences: { maxDepth: 5 })
            mainImage {
              image {
                ...ImageFragment
              }
              alt
            }
          }
        }
        services: allSanityService {
          nodes {
            id
            title
            slug {
              current
            }
          }
        }
      }
    `
  );

  const seo = page?._rawSeo || null;
  const additionalContent = page?._rawAdditionalContent || null;
  const featuredCases = page?.featuredCases || null;
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
                  <Link slug={`tjenester/${service.slug.current}`} title={service.title} className="block px-2 py-2 hover:bg-green focus:bg-green">
                    {service.title}
                  </Link>
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
          <section className="border-b mb-16 py-16">
            <div className="md:flex -mx-4">
              {additionalContent.map(content => (
                <div key={content._key} className="w-full md:w-1/2 px-4">
                  {content._type === 'richText' && <PortableText blocks={content.textContent} />}
                  {content._type === 'textImage' && (
                    <Image image={content.image} alt={content.alt} aspectRatio={content.aspectRatio} imageText={content.imageText}/>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
        {featuredCases && (
          <section className="mb-16">
            {featuredCases.map((c, index) => (
              <article key={c.id}>
                { renderCaseContent(c, index) }
              </article>
            ))}
          </section>
        )}
      </Layout>
    </>
  );
};
