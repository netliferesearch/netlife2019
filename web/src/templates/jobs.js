import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import TextImage from '../components/TextImage';
import ContactSection from '../components/ContactSection';
import EventListItem from '../components/EventListItem';
import PortableText from '../components/PortableText';
import MainHeading from '../components/MainHeading';

const Events = ({ pageContext, location }) => {
  const { sanityJobAdvertListing } = useStaticQuery(
    graphql`
      {
        sanityJobAdvertListing(_id: { eq: "jobAdvertListing" }) {
          title
          _rawSeo(resolveReferences: { maxDepth: 5 })
          _rawAdditionalContent(resolveReferences: { maxDepth: 5 })
          jobAdverts {
            _id
            title
            deadline
            office {
              name
            }
            slug {
              current
            }
          }
          additionalContent {
            __typename
            ... on SanityTextImage {
              _key
              _type
              imageLeft
              alt
              image {
                ...ImageFragment
              }
            }
            ... on SanityContactSection {
              _key
              _type
              title
              persons {
                _id
                name
                email
                role
                services {
                  name
                }
                phoneNumber
                image {
                  ...ImageFragment
                }
              }
            }
          }
        }
      }
    `
  );

  const {
    title,
    _rawSeo: seo = {},
    jobAdverts: events = [],
    _rawAdditionalContent: _rawAdditionalContent = [],
    additionalContent: additionalContent = []
  } = sanityJobAdvertListing;

  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <div className="border-b border-black">
          <MainHeading>{title}</MainHeading>
        </div>
        <ul className="my-8 md:my-16">
          {events.map(event => (
            <EventListItem
              title={event.title}
              dates={[event.deadline]}
              slug={event.slug.current}
              key={event._id}
            >
              <div className="text-lg">{event.office.name}</div>
            </EventListItem>
          ))}
        </ul>
        {additionalContent.map(content => {
          /* We need to use the raw field to render this objects block field */
          if (content._type === 'textImage') {
            const rawContent = _rawAdditionalContent.find(
              x => x._key === content._key
            );

            if (!rawContent) return '';

            return (
              <div className="py-8 md:py-16" key={content._key}>
                <TextImage
                  image={rawContent.image}
                  alt={rawContent.alt}
                  imageLeft={rawContent.imageLeft}
                >
                  <h2 className="text-lg mb-4 -mt-2">{rawContent.name}</h2>
                  <PortableText blocks={rawContent.textContent} />
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
          return '';
        })}
      </Layout>
    </>
  );
};

export default Events;
