import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
import { isBrowser } from 'react-device-detect';
import PortableText from '../components/PortableText';
import TextImageScroll from '../components/TextImageScroll';
import TextImage from '../components/TextImage';
import Image from '../components/Image';
import Video from '../components/Video';
import path from 'path';
import { showTemplateName } from '../lib/showTemplateNameUtil';
const templateName = path.basename(__filename);

export default ({ pageContext, location }) => {
  showTemplateName(templateName);
  const { sanityDigitalWaste } = useStaticQuery(
    graphql`
      {
        sanityDigitalWaste {
          title
          intro
          _rawSeo(resolveReferences: { maxDepth: 5 })
          videoId
          _rawContent(resolveReferences: { maxDepth: 5 })
        }
      }
    `
  );

  const title = sanityDigitalWaste?.title || '';
  const intro = sanityDigitalWaste?.intro || '';
  const seo = sanityDigitalWaste?._rawSeo || null;
  const videoId = sanityDigitalWaste?.videoId || '';
  const content = sanityDigitalWaste?._rawContent || [];

  return (
    <>
      <SEO title={title} description={intro} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <section className="w-full md:w-3/4">
          <MainHeading tight>{title}</MainHeading>
          <section className="w-full text-md md:w-3/5">{intro}</section>
        </section>
        {isBrowser && videoId ? (
          <Video id={videoId} placeholder isLarge />
        ) : (
          <hr />
        )}
        <section className="mt-16">
          {content.map(c => {
            /* We need to use the raw field to render this objects block field */
            if (c._type === 'textImage') {
              return (
                <div className="w-full md:w-2/3 mx-auto" key={c._key}>
                  <div className="my-8 md:my-16">
                    <TextImage
                      image={c.image}
                      alt={c.alt}
                      imageLeft={c.imageLeft}
                    >
                      <h2 className="text-md mb-4 -mt-2">{c.name}</h2>
                      <PortableText blocks={c.textContent} />
                    </TextImage>
                  </div>
                </div>
              );
            } else if (c._type === 'textImageScroll') {
              return (
                <div className="my-8 md:my-16" key={c._key}>
                  <TextImageScroll images={c.images}>
                    <h2 className="text-md mb-4 -mt-2">{c.name}</h2>
                    <PortableText blocks={c.textContent} />
                  </TextImageScroll>
                </div>
              );
            } else if (c._type === 'articleImage') {
              return (
                <div className="my-8 md:my-16" key={c._key}>
                  {c?.image?.asset && (
                    <Image
                      image={c.image}
                      alt={c.alt}
                      aspectRatio={c.aspectRatio}
                      imageText={c.imageText}
                    />
                  )}
                </div>
              );
            } else if (c._type === 'richText') {
              return (
                <div className="my-8 md:my-16 md:w-1/2 mx-auto" key={c._key}>
                  <PortableText blocks={c.textContent} />
                </div>
              );
            }
            return null;
          })}
        </section>
      </Layout>
    </>
  );
};
