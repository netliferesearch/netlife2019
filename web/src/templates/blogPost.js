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
import RelatedPosts from '../components/RelatedPosts';
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
      featuredPosts {
        _id
        _rawSlug
        title
        publishDate
        serviceCategories {
          title
        }
        mainImage {
          alt
          image {
            ...ImageFragment
          }
        }
      }
      _rawArticle(resolveReferences: { maxDepth: 10 })
      _rawSeo(resolveReferences: { maxDepth: 5 })
      _rawCtaText
      author {
        id
        name
        phoneNumber
        email
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
      contact {
        contactTitle
        contactPerson {
          id
          name
          phoneNumber
          email
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
      }
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

const renderContact = (contactPerson, contactTitle) => {
  return (
    <>
      {contactPerson != '' && (
        <div className="">
          <section className="w-full border-t mt-8 flex flex-wrap">
            <div className="w-full md:w-1/2 text-md mt-8 pr-8">
              {contactTitle}
            </div>
            <div className="w-full lg:w-1/2 mt-4">
              {contactPerson.map(person => (
                <div key={person.id} className="mt-4">
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
            </div>
          </section>
        </div>
      )}
    </>
  );
};

const renderCTA = ctaText => (
  <>
    {ctaText != null && (
      <div className="flex flex-wrap">
        <section className="border text-center mx-auto w-1/2 mt-4 -mb-8 md:w-1/3 lg:w-1/5 lg:mt-16 lg:absolute ">
          <PortableText blocks={ctaText} />
        </section>
      </div>
    )}
  </>
);

const blogPost = ({ data, pageContext, location }) => {
  showTemplateName(templateName);
  const {
    _rawArticle: { textContent: textContent = null } = {},
    _rawSeo: seo = null,
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
    title: title = '',
    featuredPosts: featuredPosts = []
  } = data?.sanityBlogPost;
  const ctaText = data?.sanityBlogPost?._rawCtaText?.textContent || null;
  const contactTitle = data?.sanityBlogPost?.contact?.contactTitle || '';
  const contactPerson = data?.sanityBlogPost?.contact?.contactPerson || '';

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
          {renderContact(contactPerson, contactTitle)}
          <RelatedPosts data={featuredPosts} />
        </div>
      </Layout>
    </>
  );
};

export default blogPost;
