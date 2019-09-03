import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import { formatPhoneNumber, personLabel } from '../lib/helpers';

export const query = graphql`
  query($id: String!) {
    sanityPerson(id: { eq: $id }) {
      name
      services {
        name
      }
      role
      phoneNumber
      email
      office {
        name
        slug {
          current
        }
      }
      socialMedia {
        twitter
        medium
        portfolio
        linkedin
        articles {
          title
          url
        }
      }
      image {
        asset {
          fluid(maxWidth: 840, maxHeight: 840) {
            ...GatsbySanityImageFluid
          }
        }
      }
      about {
        threeWords
        pleasedWith
        onANormalDay
        myStrength
        interests
        icanhelpyouwith
        cantWorkWithout
      }
    }
  }
`;

const personBio = props => {
  const { data, pageContext, errors } = props;
  const {
    name,
    image,
    role,
    services,
    office,
    about,
    socialMedia,
    email,
    phoneNumber
  } = data && data.sanityPerson;
  return (
    <Layout breadcrumb={pageContext.breadcrumb}>
      {errors && <SEO title="GraphQL Error" />}

      {name && <SEO title={name || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      <h1 className="text-xl -mt-2 pb-8 mb-12 border-b border-black border-solid">
        {name}
      </h1>
      <section className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4">
          {!!image && (
            <Img fluid={image.asset.fluid} alt={`Bilde av ${name}`} />
          )}
        </div>
        <div className="w-full md:w-2/3 px-4 mt-6 md:mt-0">
          <h2 className="text-lg leading-extra-none">
            {personLabel(role, services)}
          </h2>
          <ul className="mt-4 rich-text">
            <li className="mb-1">
              <a href={office.slug.current}>{office.name}</a>
            </li>
            <li className="mb-1">
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li className="mb-1">
              <a href={`tel:+47${phoneNumber}`}>
                {formatPhoneNumber(phoneNumber)}
              </a>
            </li>
            {socialMedia && socialMedia.twitter && (
              <li className="mb-1">
                <a href={socialMedia.twitter}>Twitter</a>
              </li>
            )}
            {socialMedia && socialMedia.medium && (
              <li className="mb-1">
                <a href={socialMedia.medium}>Medium</a>
              </li>
            )}
            {socialMedia && socialMedia.linkedin && (
              <li className="mb-1">
                <a href={socialMedia.linkedin}>LinkedIn</a>
              </li>
            )}
            {socialMedia && socialMedia.portfolio && (
              <li className="mb-1">
                <a href={socialMedia.portfolio}>Portfolio</a>
              </li>
            )}
          </ul>
        </div>
      </section>
      {about && (
        <section>
          <h2 className="text-lg mt-12 pt-10 border-t border-solid border-black">
            Litt om meg
          </h2>
          <ul className="flex flex-wrap -mx-4">
            <li className="w-full md:w-1/3 px-4 mt-4">
              <strong>Jeg kan hjelpe deg med:</strong>
              <p>{about.icanhelpyouwith}</p>
            </li>
            <li className="w-full md:w-1/3 px-4 mt-4">
              <strong>Er superopptatt av:</strong>
              <p>{about.interests}</p>
            </li>
            <li className="w-full md:w-1/3 px-4 mt-4">
              <strong>Klarer ikke å jobbe uten:</strong>
              <p>{about.cantWorkWithout}</p>
            </li>
            <li className="w-full md:w-1/3 px-4 mt-4">
              <strong>På en vanlig dag:</strong>
              <p>{about.onANormalDay}</p>
            </li>
            <li className="w-full md:w-1/3 px-4 mt-4">
              <strong>Blir spesielt fornøyd:</strong>
              <p>{about.pleasedWith}</p>
            </li>
            <li className="w-full md:w-1/3 px-4 mt-4">
              <strong>Min styrke</strong>
              <p>{about.myStrength}</p>
            </li>
            <li className="w-full md:w-1/3 px-4 mt-4">
              <strong>Meg selv med tre ord:</strong>
              <p>{about.threeWords}</p>
            </li>
          </ul>
        </section>
      )}
      {socialMedia && !!socialMedia.articles.length && (
        <section>
          <h2 className="text-lg mt-12 pt-10 border-t border-solid border-black">
            Ting jeg har på hjertet
          </h2>
          <ul className="flex flex-wrap -mx-4">
            {socialMedia.articles.map(article => (
              <li className="w-full md:w-1/3 px-4 mt-4">
                <a href={article.url}>{article.title}</a>
              </li>
            ))}
          </ul>
        </section>
      )}
      <hr className="mt-12 mb-6 border-t border-solid border-black" />
    </Layout>
  );
};

export default personBio;
