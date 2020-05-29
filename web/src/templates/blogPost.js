import React from 'react';
import { graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';
import Image from '../components/Image';
import Person from '../components/Person';
import Link from '../components/Link';
import {
  formatFullDate,
  formatDateVerbose
} from '../lib/formatDates/formatDates';
import { setSplitClass, setSplitType } from '../lib/setSplitUtil';
import path from 'path';
import { showTemplateName } from '../lib/showTemplateNameUtil';
const templateName = path.basename(__filename);

// Non static query, see $id
export const query = graphql`
  query($id: String!) {
    sanityBlogPost(id: { eq: $id }) {
      title
      slug {
        current
      }
      publishDate
      mainImageText
      mainImage {
        image {
          ...ImageFragment
        }
        alt
        aspectRatio
      }
      serviceCategories {
        title
        slug {
          current
        }
      }
      _rawArticle(resolveReferences: { maxDepth: 10 })
      _rawSeo(resolveReferences: { maxDepth: 5 })
      _rawCtaText
      author {
        id
        name
        inactive
        image {
          ...ImageFragment
        }
        slug {
          current
        }
        role
        services {
          name
        }
      }
      intro
    }
  }
`;

const renderTop = ({
  authorName,
  authorSlug,
  imagePlacement,
  intro,
  mainImage,
  mainImageAlt,
  mainImageText,
  mainImageAspectRatio,
  publishDate,
  splitType,
  title
}) => {
  const imageColOrder = imagePlacement === 'right' ? ' order-1 md:order-2' : '';
  const contentColOrder =
    imagePlacement === 'right' ? ' order-2 md:order-1' : '';

  return (
    <>
      <h1 className="w-full md:w-1/2 text-lg -mt-2 mb-4">{title}</h1>
      <div className={`post-top--split ${setSplitType(splitType)}`}>
        <div className={`flex flex-wrap -mx-4 mb-4`}>
          {mainImage?.asset && (
            <figure
              className={`w-full px-4 md:${setSplitClass(
                splitType,
                1
              )}${imageColOrder} mb-4 md:mb-0 relative`}
            >
              <Image
                image={mainImage}
                alt={mainImageAlt}
                aspectRatio={mainImageAspectRatio}
              />
              <div className="text-xs text-right pt-2">
                <em className="text-xs">{mainImageText}</em>
              </div>
            </figure>
          )}
          <div
            className={`w-full px-4${
              mainImage?.asset
                ? ` md:${setSplitClass(splitType, 2)}${contentColOrder}`
                : ''
            }`}
          >
            <div className="flex flex-col justify-between h-full">
              {intro && <div className="text-md mb-4">{intro}</div>}
              {(publishDate || authorName) && (
                <div>
                  {publishDate && (
                    <div className="mb-1">
                      Publisert:{' '}
                      <span timedate={publishDate}>
                        {formatDateVerbose(formatFullDate(publishDate))}
                      </span>
                    </div>
                  )}
                  {authorName && (
                    <span className="text-sml">
                      Skrevet av{' '}
                      {authorSlug ? (
                        <Link
                          className="font-lining link"
                          slug={authorSlug?.current}
                          title={authorName}
                        >
                          {authorName}
                        </Link>
                      ) : (
                        authorName
                      )}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const renderContent = textContent => (
  <div className="flex flex-wrap">
    <section className="w-full md:w-1/2 ml-auto mr-auto mt-12">
      <PortableText blocks={textContent} />
    </section>
  </div>
);

const renderPersons = persons => {
  return (
    <div className="flex flex-wrap">
      <section className="w-full md:w-1/2 ml-auto mr-auto border-t mt-8">
        {persons.map(person => (
          <div key={person.id} className="px-4 mt-8">
            <Person
              name={person.name}
              email={person.email}
              role={person.role}
              slug={person.slug.current}
              services={person.services}
              phoneNumber={person.phoneNumber}
              image={person.image}
              inactiveUser={person.inactive}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

const renderServices = serviceCategories => {
  return (
    <div className="flex flex-wrap">
      <section className="w-full md:w-1/2 ml-auto mr-auto border-t mt-8 pt-8">
        <h2 className="text-md mb-2">Tjenester vi tilbyr:</h2>
        <ul>
          {serviceCategories.map(service => (
            <li className="list-none" key={uuidv4()}>
              <Link slug={service?.slug?.current} className="font-lining link">
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const renderCTA = ctaText => (
  <div className="flex flex-wrap">
    <section className="border text-center lg:text-left lg:w-1/5 mt-16 p-2 lg:absolute ">
      <PortableText blocks={ctaText} />
    </section>
  </div>
);

const blogPost = ({ data, pageContext, location }) => {
  showTemplateName(templateName);
  const {
    _rawArticle: { textContent: textContent = null } = {},
    _rawSeo: seo = null,
    _rawCtaText: { textContent: ctaText = null } = {},
    author: persons = [],
    intro: intro = null,
    mainImage: {
      image: mainImage = null,
      alt: mainImageAlt = '',
      aspectRatio: mainImageAspectRatio = null
    },
    mainImageText = '',
    publishDate: publishDate = '',
    serviceCategories: serviceCategories = [],
    title: title = ''
  } = data?.sanityBlogPost;

  const authorName = persons[0]?.name || null;
  const authorSlug = persons[0]?.slug || null;

  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <div className="w-full max-w-full">
          <article>
            {renderTop({
              authorName,
              authorSlug,
              imagePlacement: 'right',
              intro,
              mainImage,
              mainImageAlt,
              mainImageText,
              mainImageAspectRatio,
              publishDate,
              splitType: '50-50',
              title
            })}
            {renderCTA(ctaText)}
            {renderContent(textContent)}
          </article>
          {renderPersons(persons)}
          {renderServices(serviceCategories)}
        </div>
      </Layout>
    </>
  );
};

export default blogPost;
