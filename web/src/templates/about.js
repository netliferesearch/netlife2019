import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactPlayer from 'react-player';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
import { isBrowser } from 'react-device-detect';
import PortableText from '../components/PortableText';
import TextImageScroll from '../components/TextImageScroll';
import TextImage from '../components/TextImage';
import Image from '../components/Image';

export default ({ pageContext, location }) => {
  const { sanityAbout } = useStaticQuery(
    graphql`
      {
        sanityAbout {
          title
          intro
          _rawSeo(resolveReferences: { maxDepth: 5 })
          videoId
          _rawContent(resolveReferences: { maxDepth: 5 })
        }
      }
    `
  );

  const title = sanityAbout?.title || '';
  const intro = sanityAbout?.intro || '';
  const seo = sanityAbout?._rawSeo || null;
  const videoId = sanityAbout?.videoId || '';
  const content = sanityAbout?._rawContent || [];

  return (
    <>
      <SEO title={title} description={intro} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading>{title}</MainHeading>
        {intro && <div className="mt-12 mb-12 text-lg md:w-3/4">{intro}</div>}
        {isBrowser && videoId ? (
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            <ReactPlayer
              url={videoId}
              className="absolute top-0 left-0"
              playing={true}
              loop={true}
              controls={false}
              muted={true}
              width="100%"
              height="100%"
            />
          </div>
        ) : (
          <hr />
        )}

        {content.map(c => {
          /* We need to use the raw field to render this objects block field */
          if (c._type === 'textImage') {
            return (
              <div className="py-8 md:py-16" key={c._key}>
                <TextImage image={c.image} alt={c.alt} imageLeft={c.imageLeft}>
                  <h2 className="text-lg mb-4 -mt-2">{c.name}</h2>
                  <PortableText blocks={c.textContent} />
                </TextImage>
              </div>
            );
          } else if (c._type === 'textImageScroll') {
            return (
              <div className="py-8 md:py-16" key={c._key}>
                <TextImageScroll images={c.images}>
                  <h2 className="text-lg mb-4 -mt-2">{c.name}</h2>
                  <PortableText blocks={c.textContent} />
                </TextImageScroll>
              </div>
            );
          } else if (c._type === 'articleImage') {
            return (
              <div className="py-8 md:py-16" key={c._key}>
                <Image
                  image={c.image}
                  alt={c.alt}
                  aspectRatio={c.aspectRatio}
                  imageText={c.imageText}
                />
              </div>
            );
          } else if (c._type === 'richText') {
            return (
              <div
                className="text-lg py-8 md:py-16 md:w-1/2 mx-auto"
                key={c._key}
              >
                <PortableText blocks={c.textContent} />
              </div>
            );
          }
          return '';
        })}
      </Layout>
    </>
  );
};
