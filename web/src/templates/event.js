import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import TextImage from '../components/TextImage';
import Image from '../components/Image';
import PortableText from '../components/PortableText';
import MainHeading from '../components/MainHeading';
import Link from '../components/Link';
import { ButtonLink } from '../components/Button';
import EventInfo from '../components/EventInfo';
import path from 'path';
import { showTemplateName } from '../lib/showTemplateNameUtil';
const templateName = path.basename(__filename);

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
      price
      tickets
      address
      _rawText(resolveReferences: { maxDepth: 5 })
      linkedPersons {
        name
        slug {
          current
        }
      }
      additionalContent {
        ... on SanityCustomEvent {
          _key
          _type
        }
      }
      _rawAdditionalContent
    }
  }
`;

const event = ({ data, pageContext, location }) => {
  showTemplateName(templateName);
  const {
    title: title = '',
    intro: intro = '',
    image: image = null,
    eventStart: eventStart = '',
    eventEnd: eventEnd = '',
    price: price = 0,
    tickets: tickets = 0,
    address: address = '',
    eventLink: eventLink = '',
    _rawText: _rawText = null,
    outroImage: outroImage = null,
    _rawSeo: seo = null,
    linkedPersons: linkedPersons = null,
    _rawAdditionalContent: _rawAdditionalContent = [],
    additionalContent: additionalContent = []
  } = data?.sanityEvent;

  return (
    <>
      <SEO title={title} description={intro} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading>{title}</MainHeading>
        <div className="my-16">
          <TextImage image={image} alt={''} square>
            <p className="text-md">{intro}</p>
            <div className="flex flex-col justify-between mt-12 lg:w-2/3">
              <EventInfo
                eventEnd={eventEnd}
                eventStart={eventStart}
                price={price}
                tickets={tickets}
                address={address}
              />
            {eventLink && (
              <div className="mt-8">
              <ButtonLink
                href={eventLink}
                target="_blank"
                value="Meld meg på"
                />
            </div>
          )}
          </div>
          </TextImage>
        </div>
        <section className="mx-auto w-full sm:w-3/4 lg:w-1/2">
          <PortableText blocks={_rawText} />
          <hr className="mt-12 mb-6 border-t border-solid border-black" />
          {linkedPersons && linkedPersons.length > 0 && (
            <div className="my-8">
              <h3 className="text-md mb-4">Kursholder</h3>
              {linkedPersons.map(person => (
                <p>
                  {person.slug?.current ? (
                    <Link
                      className="link font-lining"
                      slug={person.slug.current}
                      alt={person.name}
                    >
                      {person.name}
                    </Link>
                  ) : (
                    person.name
                  )}
                </p>
              ))}
            </div>
          )}
          <hr className="mt-12 mb-6 border-t border-solid border-black" />
          <div className="flex flex-col justify-between mt-12 lg:w-2/3">
          <h3 className="text-md mb-4">Meld deg på</h3>
              <EventInfo
                eventEnd={eventEnd}
                eventStart={eventStart}
                price={price}
                tickets={tickets}
                address={address}
              />
            {eventLink && (
              <div className="mt-8">
              <ButtonLink
                href={eventLink}
                target="_blank"
                value="Meld meg på"
                />
            </div>
          )}
          </div>
        </section>
        {outroImage && (
          <div className="mt-16">
            <Image image={outroImage} alt="test" aspectRatio="2:1" />
          </div>
        )}
        {additionalContent.map(content => {
          /* We need to use the raw field to render this objects block field */
          if (content._type === 'customEvent') {
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
          }
          return null;
        })}
      </Layout>
    </>
  );
};

export default event;
