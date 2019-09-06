import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import Illustration from '../assets/sms-dialog.svg';

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
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
`;

const IndexPage = props => {
  const { data } = props;

  const site = (data || {}).site;
  const menuItems = data && data.mainMenu && data.mainMenu.items;

  return (
    <Layout>
      <SEO title={site.title} description={site.description} />
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
  );
};

export default IndexPage;
