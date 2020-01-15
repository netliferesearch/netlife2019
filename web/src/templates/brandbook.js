import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
// import { isBrowser } from 'react-device-detect';
// import PortableText from '../components/PortableText';
// import TextImageScroll from '../components/TextImageScroll';
// import TextImage from '../components/TextImage';
// import Image from '../components/Image';
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

//  console.log('Pages', brandbookPages, 'Templates',brandbookTemplates, 'Content', brandbookContent);
  return (
    <>
      <SEO title={title} description={intro} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading>{name}</MainHeading>
        {intro && <div className="mt-16 text-lg md:w-3/4">{intro}</div>}
        <section className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            {typeof brandbookPages === 'object' && (
              <ul>
                {brandbookPages.map(page => (
                  <li key={`brandbook-page-${page.title}`}>
                    {page.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="w-full md:w-1/3">
            {typeof brandbookPages === 'object' && (
              <ul>
                {brandbookTemplates.map(template => (
                  <li key={`brandbook-template-${template.title}`}>
                    {template.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {typeof brandbookContent === 'object' && brandbookContent.map((block, i) => (
            <div key={`brandbook-block-${block?.linkToBrandbookPage?.title || i}`} className="w-full md:w-1/3">
              {block?.linkToBrandbookPage?.title}
            </div>
          ))}
        </section>
      </Layout>
    </>
  );
};
