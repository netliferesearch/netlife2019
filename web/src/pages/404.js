import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import PortableText from '../components/PortableText';

export const query = graphql`
  {
    sanitySiteSettings {
      _rawNotFoundMessage(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const NotFoundPage = ({ data }) => {
  const message = data.sanitySiteSettings._rawNotFoundMessage.textContent;

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="rich-text">
        <PortableText blocks={message} />
      </div>
    </Layout>
  );
};

export default NotFoundPage;
