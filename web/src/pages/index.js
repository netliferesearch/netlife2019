import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import Link from '../components/Link';
import Animation from '../components/Animation';

export default ({ location }) => {
  const { site, mainMenu } = useStaticQuery(
    graphql`
      query {
        site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
          title
          _rawHomePageSeo(resolveReferences: { maxDepth: 5 })
        }
        mainMenu: sanityMenu(name: { eq: "main" }) {
          ...PageLinks
        }
      }
    `
  );

  const seo = site?._rawHomePageSeo || null;
  const menuItems = mainMenu?.items || [];

  return (
    <>
      <SEO seo={seo} location={location} />
      <Layout hideHamburger>
        <div className="flex flex-wrap pt-0 md:pt-8">
          <nav className="w-full md:w-1/2">
            {menuItems.map(item => (
              <div key={item._key}>
                <Link
                  slug={item.internalPage?.slug?.current}
                  href={item.url}
                  className="text-lg link font-lining"
                >
                  {item.text}
                </Link>
              </div>
            ))}
          </nav>
          <div className="flex w-full md:w-1/2 text-left md:text-right flex-col justify-center">
            <div className="mr-0 md:ml-16 lg:ml-48 mt-16 md:mt-2 lg:mt-0">
              <Animation
                sprite="/hand-scroll.svg"
                baseScale={1}
                height={194}
                width={280}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
