import React from 'react';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import TextImage from '../components/TextImage';
import { formatFullDate } from '../lib/formatDates/formatDates';
import PortableText from '../components/portableText';
import Image from '../components/Image';

const personBio = props => {
  const { pageContext, errors } = props;
  const {
    title: title = '',
    intro: intro = '',
    image: image = null,
    deadline: deadline = '',
    _rawText: _rawText = null,
    outroImage: outroImage = null
  } = pageContext;

  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {title && <SEO title={title} />}
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      <h1 className="text-xl -mt-2 mb-8 w-full md:w-2/3">{title}</h1>
      <div className="my-16">
        <TextImage image={image} alt={''} half>
          <p className="text-lg">{intro}</p>
        </TextImage>
      </div>
      <section className="mx-auto w-full sm:w-3/4 lg:w-1/2">
        <PortableText blocks={_rawText} />
        {deadline && (
          <div className="my-8">
            <strong>Søknadsfrist:</strong> {formatFullDate(deadline)}
          </div>
        )}
      </section>
      {outroImage && (
        <div className="mt-16">
          <img
            src={outroImage.asset.fixed.src}
            alt="asdf"
            className="w-full xl:w-2/3 xl:m-auto"
          />
        </div>
      )}
    </Layout>
  );
};

export default personBio;
