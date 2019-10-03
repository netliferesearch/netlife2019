import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import TextImage from '../components/TextImage';
import Image from '../components/Image';
import { formatFullDateTime } from '../lib/formatDates/formatDates';
import PortableText from '../components/PortableText';
import MainHeading from '../components/MainHeading';
import { ButtonLink } from '../components/Button';

// Non static query, see $id
export const query = graphql`
  query($id: String!) {
    sanityEvent(id: { eq: $id }) {
      title
      _rawSeo(resolveReferences: { maxDepth: 5 })
      image {
        ...ImageFragment
      }
      slug {
        current
      }
      intro
      eventStart
      eventEnd
      eventLink
      _rawText(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const event = ({ data, pageContext, location }) => {
  const {
    title: title = '',
    intro: intro = '',
    image: image = null,
    eventStart: eventStart = '',
    eventEnd: eventEnd = '',
    eventLink: eventLink = '',
    _rawText: _rawText = null,
    outroImage: outroImage = null,
    _rawSeo: seo = null
  } = data?.sanityEvent;

  return (
    <>
      <SEO title={title} description={intro} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading>{title}</MainHeading>
        <div className="my-16">
          <TextImage image={image} alt={''} square>
            <p className="text-lg">{intro}</p>
          </TextImage>
        </div>
        <section className="mx-auto w-full sm:w-3/4 lg:w-1/2">
          <PortableText blocks={_rawText} />
          {eventStart && (
            <div className="my-8">
              <strong>Start:</strong> {formatFullDateTime(eventStart)}
            </div>
          )}
          {eventEnd && (
            <div className="my-8">
              <strong>End:</strong> {formatFullDateTime(eventEnd)}
            </div>
          )}
          {eventLink && (
            <div className="my-8">
              <ButtonLink href={eventLink} target="_blank" value="Meld meg på" />
            </div>
          )}
        </section>
        {outroImage && (
          <div className="mt-16">
            <Image image={outroImage} alt="test" aspectRatio="2:1" />
          </div>
        )}
      </Layout>
    </>
  );
};

export default event;
