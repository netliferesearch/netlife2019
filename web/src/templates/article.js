import React from 'react';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';
import MainHeading from '../components/MainHeading';

export default ({ pageContext, location }) => {
  const { name: name = '', title: title = '', _rawText } = pageContext;
  return (
    <>
      <SEO title={name} canonical={location.href} />
      <Layout>
        <MainHeading>{title}</MainHeading>
        <section className="mx-auto w-full sm:w-3/4 lg:w-1/2">
          <PortableText blocks={_rawText?.textContent} />
        </section>
      </Layout>
    </>
  );
};
