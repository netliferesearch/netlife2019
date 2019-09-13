import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import Illustration from '../assets/sms-dialog.svg';
import Link from '../components/Link';

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

  const siteTitle = site?.title || '';
  const seo = site?._rawHomePageSeo || null;
  const menuItems = mainMenu?.items || [];

  return (
    <>
      <SEO seo={seo} location={location} />
      <Layout>
        <div className="flex flex-wrap">
          <nav className="w-full md:w-1/2 pt-0 md:pt-8">
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
          <div className="w-full md:w-1/2 text-left md:text-right">
            <Illustration className="inline-block h-64 my-8 md:my-0" />
          </div>
        </div>
      </Layout>
    </>
  );
};
