import React from 'react';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';

const personBio = ({ pageContext }) => {
  const { name: name = '', title: title = '', _rawText } = pageContext;
  return (
    <>
      <SEO title={name} />
      <Layout>
        <h1 className="text-xl -mt-2 mb-8 w-full md:w-2/3">{title}</h1>
        <section className="mx-auto w-full sm:w-3/4 lg:w-1/2">
          <PortableText blocks={_rawText} />
        </section>
      </Layout>
    </>
  );
};

export default personBio;
