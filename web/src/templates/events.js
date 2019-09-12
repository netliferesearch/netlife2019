import React from 'react';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import TextImage from '../components/TextImage';
import ContactSection from '../components/ContactSection';
import EventListItem from '../components/EventListItem';
import PortableText from '../components/PortableText';
import MainHeading from '../components/MainHeading';

const Events = ({ pageContext, path }) => {
  const {
    title: title = '',
    events: events = [],
    additionalContent: additionalContent = [],
    contactSectionImages: contactSectionImages = []
  } = pageContext;

  return (
    <>
      <SEO title={'Kontakt'} description={title} />
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
              <div className="text-lg">{event._rawOffice.name}</div>
            </EventListItem>
          ))}
        </ul>
        {additionalContent.map(content => {
          if (content._type === 'textImage') {
            return (
              <div className="py-8 md:py-16" key={content._id}>
                <TextImage
                  image={content.image}
                  alt={content.name}
                  imageLeft={content.imageLeft}
                >
                  <h2 className="text-lg mb-4 -mt-2">{content.name}</h2>
                  <PortableText blocks={content.textContent} />
                </TextImage>
              </div>
            );
          } else if (content._type === 'contactSection') {
            const persons = content.persons.map(person => ({
              ...person,
              image:
                !!contactSectionImages.filter(x => x.id === person._id)
                  .length &&
                contactSectionImages.filter(x => x.id === person._id)[0].img
            }));
            return (
              <div className="py-8 md:py-16" key={content._id}>
                <ContactSection heading={content.title} persons={persons} />
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
