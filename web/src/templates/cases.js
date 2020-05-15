/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { orderBy } from 'lodash';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import TextImage from '../components/TextImage';
import MainHeading from '../components/MainHeading';
import PortableText from '../components/PortableText';
import Image from '../components/Image';
import InputField from '../components/InputField'
import Link from '../components/Link';
import ContactSection from '../components/ContactSection';
import path from 'path';
import { showTemplateName } from '../lib/showTemplateNameUtil';
const templateName = path.basename(__filename);

const caseImageRender = ({ c }, card) => {
  //Base if card is false.
  let aspectRatio = c.mainImage.aspectRatio;
  let shrinkImage = 1; //Added if needed for scaling card images etc in the future

  if (card === true) {
    aspectRatio = "1:1"
    shrinkImage = 0.5
  }

  return (
    <div>
      {c?.mainImage?.image?.asset && (
        <Image
          image={c.mainImage.image}
          alt={c.mainImage.alt}
          aspectRatio={aspectRatio}
          shrinkImage={shrinkImage}
        />
      )}
    </div>
  )
}

const caseTextRender = ({ c }) => {
  return (
    <>
      <h3 className="text-md">
        <Link
          slug={c.slug.current}
          title={c.title}
          className="font-lining link"
        >
          {c.title}
        </Link>
      </h3>
      {c._rawIntro?.textContent && (
        <PortableText blocks={c._rawIntro.textContent} />
      )}
    </>
  )
}


const Events = ({ pageContext, location }) => {
  showTemplateName(templateName);
  const { page, cases, contact } = useStaticQuery(
    graphql`
      {
        page: sanityCasesListing {
          id
          title
          intro
          _rawSeo(resolveReferences: { maxDepth: 5 })
          _rawAdditionalContent
          caseOrder {
            _id
            id
            title
            previewStyle
            _rawIntro(resolveReferences: { maxDepth: 1 })
            slug {
              current
            }
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
              id
            }
          }
          additionalContent {
            ... on SanityContactSection {
              _key
              _type
            }
            ... on SanityCustomEvent {
              _key
              _type
            }
            ... on SanityTextImage {
              _key
              _type
            }
          }
        }
        contact: sanitySiteSettings {
          contactBlock {
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
              slug {
                current
              }
            }
            form {
              submitButtonText
              formFields {
                ... on SanityFormFieldText {
                  _key
                  _type
                  description
                  errorMessage
                  label
                  required
                  type
                }
                ... on SanityFormFieldSelection {
                  _key
                  _type
                  description
                  errorMessage
                  items
                  label
                  required
                  type
                }
              }
            }
          }
        }
      }
    `
  );

  const { title: title = '',
    intro: intro = '',
    _rawSeo: seo = [],
    _rawAdditionalContent: _rawAdditionalContent = [],
    additionalContent: additionalContent = []
  } = page;
  const allCases = page?.caseOrder || null;
  const [nameQuery, setNameQuery] = useState('');
  const [caseCategories, setCaseCategories] = useState([]);
  const [filterCategoryQuery, setFilterCategoryQuery] = useState('');
  const { form: form = null } = contact?.contactBlock;

  useEffect(() => {
    const categories = [];
    allCases &&
      allCases.map(c => {
        const casesCategories = c?.serviceCategories || [];
        casesCategories.map(category => {
          if (!categories.includes(category.title)) {
            categories.push(category.title);
          }
          return null;
        });
        return null;
      });
    caseCategories.length === 0 && setCaseCategories(categories);
  }, [allCases, caseCategories]);

  const sortCases = (cases, key) => {
    return orderBy(cases, key, 'asc');
  };

  const renderCase = c => {
    if (c?._id.startsWith('drafts.')) {
      return null;
    }

    // Render list item.
    let includeThis = true;

    if (filterCategoryQuery !== '' && c?.serviceCategories) {
      c.serviceCategories.map(serviceCategory => {
        if (
          !serviceCategory.title
            .toLowerCase()
            .includes(filterCategoryQuery.toLowerCase())
        ) {
          includeThis = false;
        } else {
          includeThis = true;
        }
        return null;
      });
    }

    // If user has typed something. Check if we can find a match and whitelist case.
    if (
      nameQuery !== '' &&
      !c.title.toLowerCase().includes(nameQuery.toLowerCase())
    ) {
      includeThis = false;
    }

    //Image card
    if (c.previewStyle === "image-card" || nameQuery !== "") {
      return includeThis ? (
        <li
          key={c.id}
          className="w-full md:w-1/3 md:pr-4 md:pl-4 sm:w-full"
        >
          <div>
            <div className="mt-12" key={c.id}>
              <div className="w-full">
                {caseImageRender({ c }, true)}
              </div>
              <div className="mt-4">
                {caseTextRender({ c })}
              </div>
            </div>
          </div>
        </li>
      ) : null;
    }
    //Image Left
    else if (c.previewStyle === "image-left" || c.previewStyle === null) {
      return includeThis ? (
        <li
          key={c.id}
        >
          <div className="w-full">
            <div className="mt-12 lg:flex" key={c.id}>
              {caseImageRender({ c }, false)}
              <div className="mt-4 lg:mt-0 w-full lg:w-2/3 lg:ml-8">
                {caseTextRender({ c })}
              </div>
            </div>
          </div>
        </li>
      ) : null;
    }
    //Image Right
    else if (c.previewStyle === "image-right") {
      return includeThis ? (
        <li
          key={c.id}
        >
          <div className="w-full">
            <div className="mt-12" key={c.id}>
              <div className="lg:w-2/3 lg:float-right lg:ml-8">
                {caseImageRender({ c }, false)}
              </div>
              <div className="mt-4 lg:mt-0 w-full lg:w-3/3">
                {caseTextRender({ c })}
              </div>
            </div>
          </div>
        </li>
      ) : null;
    }
    //Image Full
    else if (c.previewStyle === "image-full") {
      return includeThis ? (
        <li
          key={c.id}
        >
          <div className="w-full">
            <div className="mt-12" key={c.id}>
              {caseImageRender({ c }, false)}
              <div className="w-1/3 mt-4">
                {caseTextRender({ c })}
              </div>
            </div>
          </div>
        </li>
      ) : null;
    }
  };

  //Search and filter function hidden and not removed for easy-to-use future use once the case amount grows on the page
  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading tight>{title}</MainHeading>
        <div className=""></div>

        <p className="text-md mb-12 w-full md:w-1/2 ">{intro}</p>
        <div className="border-b border-solid border-black border-0"></div>

        {/*<div className="flex flex-wrap mt-10 mb-16 -mx-4">
          <div className="relative w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <InputField
              inputType="text"
              labelText="Søk"
              placeholder="Referanse"
              value={nameQuery}
              onChange={value => setNameQuery(value)}
            />
            <div className="absolute bottom-0 right-0 mr-6 mb-1"></div>
          </div>
          <div className="relative w-1/2 md:w-1/4 px-4">
            <label htmlFor="search-service" className="inline-block pb-1">
              Kategori
            </label>
            <select
              onChange={e => setFilterCategoryQuery(e.currentTarget.value)}
              value={filterCategoryQuery}
              id="search-service"
              className="w-full appearance-none bg-white pl-2 py-1 border border-black rounded-none focus:bg-green outline-none"
            >
              <option value="">Alle</option>
              {caseCategories.map((c, i) => (
                <option key={`cat-opt-${i}`} name={c}>
                  {c}
                </option>
              ))}
            </select>
            <div className="absolute bottom-0 right-0 mr-6 mb-1"></div>
          </div>
              </div>*/}

        {allCases && (
          <ul className="flex flex-wrap">{allCases.map(c => renderCase(c))}</ul>
        )}

        {additionalContent.map(content => {
          /* We need to use the raw field to render this objects block field */
          if (content._type === 'textImage') {
            const rawContent = _rawAdditionalContent.find(
              x => x._key === content._key
            );

            if (!rawContent) return null;

            return (
              <div className="py-8 md:py-16" key={content._key}>
                <TextImage
                  image={rawContent.image}
                  alt={rawContent.alt}
                  imageLeft={rawContent.imageLeft}
                >
                  <h2 className="text-md mb-4 -mt-2">{rawContent.name}</h2>
                  <PortableText blocks={rawContent.textContent} />
                </TextImage>
              </div>
            );
          } else if (content._type === 'customEvent') {
            const rawContent = _rawAdditionalContent.find(
              x => x._key === content._key
            );

            if (!rawContent) return null;

            const {
              alt,
              aspectRatio,
              image,
              isHalf = true,
              imageLeft,
              imageText,
              title,
              text,
            } = rawContent;

            return (
              <div className="mt-12 py-8 md:py-16 border-t border-b border-solid border-black" key={content._key}>
                <TextImage
                  alt={alt}
                  aspectRatio={aspectRatio}
                  image={image}
                  isHalf={isHalf}
                  imageLeft={imageLeft}
                  imageText={imageText}
                >
                  <h2 className="text-md mb-4 mt-4">{title}</h2>
                  <PortableText blocks={text} />
                </TextImage>
              </div>
            );
          } else if (content._type === 'contactSection') {
            const rawContent = _rawAdditionalContent.find(
              x => x._key === content._key
            );

            if (!rawContent) return null;

            const {
              title,
              persons
            } = rawContent;
            return (
              <>
                {form && (
                  <div className="mt-16 py-4" key={content._key}>
                    <ContactSection
                      form={form}
                      heading={title}
                      persons={persons}
                    />
                  </div>
                )}
              </>
            )
          }
          return null;
        })}

      </Layout>
    </>
  );
};

export default Events;
