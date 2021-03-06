import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import TextImage from '../components/TextImage';
import ContactSection from '../components/ContactSection';
import EventListItem from '../components/EventListItem';
import PortableText from '../components/PortableText';
import MainHeading from '../components/MainHeading';
import { showTemplateName } from '../lib/showTemplateNameUtil';
import path from 'path';
const templateName = path.basename(__filename);

const Events = ({ pageContext, location }) => {
  showTemplateName(templateName);
  const { sanityEventListing } = useStaticQuery(
    graphql`
      {
        sanityEventListing(_id: { regex: "/(drafts.|)eventListing/" }) {
          id
          events {
            _id
            title
            office {
              name
            }
            slug {
              current
            }
            eventEnd
            eventLink
            eventStart
            intro
          }
          title
          additionalContent {
            ... on SanityTextImage {
              _key
              _type
            }
            ... on SanityCustomEvent {
              _key
              _type
            }
            ... on SanityContactSection {
              _key
              _type
            }
          }
          _rawAdditionalContent
        }
      }
    `
  );

  const {
    title: title = '',
    _rawSeo: seo = {},
    events: events = [],
    _rawAdditionalContent: _rawAdditionalContent = [],
    additionalContent: additionalContent = []
  } = sanityEventListing;

  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <div className="border-b border-black">
          <MainHeading>{title}</MainHeading>
        </div>
        <ul className="my-8 md:my-12">
          {events.map(event => (
            <EventListItem
              title={event.title}
              dates={[event.eventStart, event.eventEnd]}
              slug={event.slug.current}
              key={event._id}
            >
              <div className="text-md">{event.office.name}</div>
            </EventListItem>
          ))}
        </ul>
        {additionalContent.map(content => {
          /* We need to use the raw field to render this objects block field */
          if (content._type === 'textImage') {
            const rawContent = _rawAdditionalContent.find(
              x => x._key === content._key
            );

            if (!rawContent) return null;

            return (
              <div className="py-8 md:py-16" key={content._key}>
                <TextImage
                  image={rawContent.image}
                  alt={rawContent.alt}
                  imageLeft={rawContent.imageLeft}
                >
                  <h2 className="text-md mb-4 -mt-2">{rawContent.name}</h2>
                  <PortableText blocks={rawContent.textContent} />
                </TextImage>
              </div>
            );
          } else if (content._type === 'customEvent') {
            const rawContent = _rawAdditionalContent.find(
              x => x._key === content._key
            );

            if (!rawContent) return null;

            const {
              alt,
              aspectRatio,
              image,
              isHalf = true,
              imageLeft,
              imageText,
              title,
              text,
            } = rawContent;

            return (
              <div className="py-8 md:py-16 border-t border-b border-solid border-black" key={content._key}>
                <TextImage
                  alt={alt}
                  aspectRatio={aspectRatio}
                  image={image}
                  isHalf={isHalf}
                  imageLeft={imageLeft}
                  imageText={imageText}
                >
                  <h2 className="text-md mb-4 mt-4">{title}</h2>
                  <PortableText blocks={text} />
                </TextImage>
              </div>
            );
          } else if (content._type === 'contactSection') {
            return (
              <div className="py-8 md:py-16" key={content._id}>
                <ContactSection
                  heading={content.title}
                  persons={content.persons}
                />
              </div>
            );
          }
          return null;
        })}
      </Layout>
    </>
  );
};

export default Events;
