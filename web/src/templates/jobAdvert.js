import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import TextImage from '../components/TextImage';
import Image from '../components/Image';
import { formatFullDate } from '../lib/formatDates/formatDates';
import PortableText from '../components/PortableText';
import MainHeading from '../components/MainHeading';

// Non static query, see $id
export const query = graphql`
  query($id: String!) {
    sanityJobAdvert(id: { eq: $id }) {
      title
      _rawSeo(resolveReferences: { maxDepth: 5 })
      image {
        ...ImageFragment
      }
      slug {
        current
      }
      intro
      deadline
      _rawText(resolveReferences: { maxDepth: 5 })
      outroImage {
        ...ImageFragment
      }
    }
  }
`;

const jobAdvert = ({ data, pageContext, location }) => {
  const {
    title: title = '',
    intro: intro = '',
    image: image = null,
    deadline: deadline = '',
    _rawText: _rawText = null,
    outroImage: outroImage = null,
    _rawSeo: seo = null
  } = data?.sanityJobAdvert;

  return (
    <>
      <SEO seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading>{title}</MainHeading>
        <div className="my-16">
          <TextImage image={image} alt={''} square>
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
            <Image image={outroImage} alt="test" aspectRatio="2:1" />
          </div>
        )}
      </Layout>
    </>
  );
};

export default jobAdvert;
