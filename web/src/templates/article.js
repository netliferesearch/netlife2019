import React from 'react';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/portableText';

const personBio = props => {
  const { pageContext, errors } = props;
  const { name, title, _rawText } = pageContext;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {name && <SEO title={name || 'Untitled'} />}
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      <h1 className="text-xl -mt-2 mb-8 w-full md:w-2/3">{title}</h1>
      <section className="rich-text mx-auto w-full sm:w-3/4 lg:w-1/2">
        <PortableText blocks={_rawText} />
      </section>
    </Layout>
  );
};

export default personBio;
