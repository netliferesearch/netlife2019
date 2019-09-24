import React from 'react';
import { graphql } from 'gatsby';
import Image from '../components/Image';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import Link from '../components/Link';
import MainHeading from '../components/MainHeading';
import { formatPhoneNumber, personLabel } from '../lib/helpers';

// Non static query, see $id
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
          text
          url
        }
      }
      image {
        ...ImageFragment
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

const personBio = ({ data, pageContext, location }) => {
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
  } = data?.sanityPerson;

  return (
    <>
      <SEO
        seo={{
          seoTitle: name,
          description: `${personLabel(role, services)} hos ${office.name}`
        }}
        location={location}
      />
      <Layout breadcrumb={pageContext.breadcrumb}>
        {/* Needs to have its own styling */}
        <div className="mb-12 border-b border-black border-solid">
          <MainHeading tight>{name}</MainHeading>
        </div>
        <section className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4">
            {image && <Image image={image} aspectRatio="1:1" />}
          </div>
          <div className="w-full md:w-2/3 px-4 mt-6 md:mt-0">
            <h2 className="text-lg leading-extra-none">
              {personLabel(role, services)}
            </h2>
            <ul className="mt-4 rich-text">
              <li className="mb-1">{office.name}</li>
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
              {about.icanhelpyouwith && (
                <li className="w-full md:w-1/3 px-4 mt-4">
                  <strong>Jeg kan hjelpe deg med:</strong>
                  <p>{about.icanhelpyouwith}</p>
                </li>
              )}
              {about.interests && (
                <li className="w-full md:w-1/3 px-4 mt-4">
                  <strong>Er superopptatt av:</strong>
                  <p>{about.interests}</p>
                </li>
              )}
              {about.cantWorkWithout && (
                <li className="w-full md:w-1/3 px-4 mt-4">
                  <strong>Klarer ikke å jobbe uten:</strong>
                  <p>{about.cantWorkWithout}</p>
                </li>
              )}
              {about.onANormalDay && (
                <li className="w-full md:w-1/3 px-4 mt-4">
                  <strong>På en vanlig dag:</strong>
                  <p>{about.onANormalDay}</p>
                </li>
              )}
              {about.pleasedWith && (
                <li className="w-full md:w-1/3 px-4 mt-4">
                  <strong>Blir spesielt fornøyd:</strong>
                  <p>{about.pleasedWith}</p>
                </li>
              )}
              {about.myStrength && (
                <li className="w-full md:w-1/3 px-4 mt-4">
                  <strong>Min styrke</strong>
                  <p>{about.myStrength}</p>
                </li>
              )}
              {about.threeWords && (
                <li className="w-full md:w-1/3 px-4 mt-4">
                  <strong>Meg selv med tre ord:</strong>
                  <p>{about.threeWords}</p>
                </li>
              )}
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
                  <Link
                    className="font-lining link"
                    href={article.url}
                    slug={article.slug}
                  >
                    {article.text}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        <hr className="mt-12 mb-6 border-t border-solid border-black" />
      </Layout>
    </>
  );
};

export default personBio;
