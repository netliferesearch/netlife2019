import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, useStaticQuery } from 'gatsby';
import PortableText from '../components/PortableText';

export default () => {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      {
        sanitySiteSettings {
          _rawNotFoundMessage(resolveReferences: { maxDepth: 5 })
        }
      }
    `
  );

  const message = sanitySiteSettings?._rawNotFoundMessage?.textContent || [];

  return (
    <>
      <SEO title="404: Fant ikke siden" description="Fant ikke siden" />
      <Layout>
        <div className="rich-text">
          <PortableText blocks={message} />
        </div>
      </Layout>
    </>
  );
};
