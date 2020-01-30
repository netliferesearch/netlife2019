import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
import Link from '../components/Link';
import Image from '../components/Image';

export default ({ pageContext, location }) => {
  const { sanityBrandbookListing } = useStaticQuery(
    graphql`
      {
        sanityBrandbookListing {
          title
          name
          intro
          _rawSeo
          brandbookPages {
            title
            slug {
              current
            }
          }
          brandbookTemplates {
            title
            slug {
              current
            }
          }
          brandbookContent {
            linkToBrandbookPage {
              title
              introTitle
              intro
              slug {
                current
              }
            }
            image {
              imageText
              alt
              image {
                ...ImageFragment
              }
            }
          }
        }
      }
    `
  );

  const title = sanityBrandbookListing?.title || null;
  const name = sanityBrandbookListing?.name || null;
  const intro = sanityBrandbookListing?.intro || null;
  const seo = sanityBrandbookListing?._rawSeo || null;
  const brandbookPages = sanityBrandbookListing?.brandbookPages || null;
  const brandbookTemplates = sanityBrandbookListing?.brandbookTemplates || null;
  const brandbookContent = sanityBrandbookListing?.brandbookContent || null;

  return (
    <>
      <SEO title={name} description={intro} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading>{title}</MainHeading>
        {intro && <div className="mt-16 text-lg md:w-2/3">{intro}</div>}
        <section className="flex flex-wrap">
          <div className="w-full md:w-1/3 mt-16">
            {typeof brandbookPages === 'object' && (
              <>
                <h2 className="text-lg mb-2">Merkevaren</h2>
                <ul>
                  {brandbookPages.map((page, i) => (
                    <li key={`brandbook-page-${page.title}`} className={`md:mr-12 py-2 ${i +1 !== brandbookPages.length && 'border-b border-black'}`}>
                      {page?.slug?.current ? (
                        <Link href={page.slug.current} title={page.title} className="link">{page.title}</Link>
                      ) : page.title}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="w-full md:w-1/3 mt-16">
            {typeof brandbookPages === 'object' && (
              <>
                <h2 className="text-lg mb-2">Maler</h2>
                <ul>
                  {brandbookTemplates.map((template, i) => (
                    <li key={`brandbook-template-${template.title}`} className={`md:mr-12 py-2 ${i +1 !== brandbookTemplates.length && 'border-b border-black'}`}>
                      {template?.slug?.current ? (
                        <Link href={template.slug.current} title={template.title} className="link">{template.title}</Link>
                      ) : template.title}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          {typeof brandbookContent === 'object' && brandbookContent.map((block, i) => (
            <div key={`brandbook-block-${block?.linkToBrandbookPage?.title || i}`} className="w-full md:w-1/3 mt-16">
              <div className="md:mr-12">
                <h2 className="text-lg font-lining">
                    {block?.linkToBrandbookPage?.slug?.current ? (
                    <Link href={block.linkToBrandbookPage.slug.current} title={block.linkToBrandbookPage.title} className="link">{block.linkToBrandbookPage.title}</Link>
                  ) : block?.linkToBrandbookPage?.title}
                </h2>
                {block?.linkToBrandbookPage?.intro && <p className="mt-2">{block.linkToBrandbookPage.intro}</p>}
                {block?.image?.image && (
                  <div className="mt-2">
                    <Image image={block.image.image} alt={block.image?.alt} aspectRatio="1:1" />
                  </div>
                )}
              </div>
              </div>
          ))}
        </section>
      </Layout>
    </>
  );
};
