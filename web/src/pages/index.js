import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import Illustration from '../assets/sms-dialog.svg';

export default () => {
  const { site, mainMenu } = useStaticQuery(
    graphql`
      query {
        site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
          title
        }
        mainMenu: sanityMenu(name: { eq: "main" }) {
          items {
            _key
            title
            url
          }
        }
      }
    `
  );

  const siteTitle = site?.title || '';
  const menuItems = mainMenu?.items || [];

  return (
    <>
      <SEO title={siteTitle} />
      <Layout>
        <div className="flex flex-wrap">
          <nav className="w-full md:w-1/2 pt-0 md:pt-8">
            {menuItems.map(item => (
              <div key={item._key}>
                <a href={item.url} className="text-lg link font-lining">
                  {item.title}
                </a>
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
