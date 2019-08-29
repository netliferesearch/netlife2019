import React from 'react';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/portableText';
import TextImage from '../components/TextImage';
import EventListItem from '../components/EventListItem';

const Events = props => {
  const { pageContext, errors } = props;

  const { title: title = '', events: events = [] } = pageContext;

  return (
    <>
      <SEO title={'Kontakt'} description={title} />
      <Layout>
        {errors && <SEO title="GraphQL Error" />}
        <div className=" pb-16 border-b border-black">
          <h1 className="text-xl w-full md:w-2/3">{title}</h1>
        </div>

        {errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )}

        {events.map(event => (
          <ul className="my-8 md:my-16">
            <EventListItem
              title={event.title}
              dates={[event.deadline]}
              slug={event.slug}
            >
              <div className="text-lg">{event._rawOffice.name}</div>
            </EventListItem>
          </ul>
        ))}

        {/* {additionalContent.map(content => (
          <div className="py-8 md:py-16">
            <TextImage image={event.image} alt={event.name} square>
              <h2 className="text-lg mb-4 -mt-2">{event.name}</h2>
              <PortableText blocks={event._rawOfficeInfo} />
            </TextImage>
          </div>
        ))} */}
      </Layout>
    </>
  );
};

export default Events;
