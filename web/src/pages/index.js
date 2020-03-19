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
        site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
          title
          description
          _rawHomePageSeo(resolveReferences: { maxDepth: 5 })
        }
        mainMenu: sanityMenu(name: { eq: "main" }) {
          ...PageLinks
        }
      }
    `
  );

  const seo = site?._rawHomePageSeo || null;
  const title = site?.title || '';
  const menuItems = mainMenu?.items || [];

  return (
    <>
      <SEO title={title} description="" seo={seo} location={location} />
      <Layout hideHamburger>
        <div className="flex flex-wrap pt-0 lg:pt-4">
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
            <div className="mr-0 md:ml-12 lg:ml-32 mt-16 md:-mt-12 xl:-mt-10">
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
