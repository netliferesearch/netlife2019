import React from 'react';
import { graphql } from 'gatsby';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import Illustration from '../assets/sms-dialog.svg';

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
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
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const menuItems = data && data.mainMenu && data.mainMenu.items;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 pt-0 md:pt-8">
          <nav>
            {menuItems.map(item => (
              <div key={item._key}>
                <a href={item.url} className="text-lg hover:text-grey-dark">
                  {item.title}
                </a>
              </div>
            ))}
          </nav>
        </div>
        <div className="w-full md:w-1/2 text-left md:text-right">
          <Illustration className="inline-block h-64 my-8 md:my-0" />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
