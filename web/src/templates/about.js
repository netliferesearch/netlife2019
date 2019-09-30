import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Vimeo from '@u-wave/react-vimeo';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';
import MainHeading from '../components/MainHeading';
import { isBrowser } from 'react-device-detect';

export default ({ pageContext, location }) => {
  const { sanityAbout } = useStaticQuery(
    graphql`
      {
        sanityAbout {
          title
          _rawIntro(resolveReferences: { maxDepth: 5 })
          _rawSeo(resolveReferences: { maxDepth: 5 })
          vimeoId
          _rawAboutDialog(resolveReferences: { maxDepth: 5 })
          _rawAboutDesign(resolveReferences: { maxDepth: 5 })
        }
      }
    `
  );

  const title = sanityAbout?.title || '';
  const intro = sanityAbout?._rawIntro?.textContent || null;
  const seo = sanityAbout?._rawSeo || null;
  const vimeoId = sanityAbout?.vimeoId || '';
  const aboutDesign = sanityAbout?._rawAboutDesign.textContent || null;
  const aboutDialog = sanityAbout?._rawAboutDialog.textContent || null;

  return (
    <>
      <SEO seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading>{title}</MainHeading>
        {intro && (
          <div className="mt-12 mb-12 text-lg">
            <PortableText blocks={intro} />
          </div>
        )}
        {isBrowser && vimeoId ? (
          <Vimeo
            video={vimeoId}
            autoplay
            showByline={false}
            controls={false}
            loop
            muted
            responsive
          />
        ) : (
          <hr />
        )}
        <div className="flex -mx-4 mt-6">
          <section className="w-1/2 px-4">
            <PortableText blocks={aboutDesign} />
          </section>
          <section className="w-1/2 px-4">
            <PortableText blocks={aboutDialog} />
          </section>
        </div>
      </Layout>
    </>
  );
};