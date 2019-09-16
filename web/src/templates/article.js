import React from 'react';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';
import MainHeading from '../components/MainHeading';

export default ({ pageContext, location }) => {
  const title = pageContext?.title || '';
  const text = pageContext?._rawText?.textContent || null;
  const seo = pageContext?._rawSeo || null;

  return (
    <>
      <SEO seo={seo} location={location} />
      <Layout>
        <MainHeading>{title}</MainHeading>
        <section className="mx-auto w-full sm:w-3/4 lg:w-1/2">
          <PortableText blocks={text} />
        </section>
      </Layout>
    </>
  );
};
