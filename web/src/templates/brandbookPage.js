import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import MainHeading from '../components/MainHeading';
import TextImage from '../components/TextImage';
import PortableText from '../components/PortableText';
import Image from '../components/Image';
import ImageX2 from '../components/ImageX2';
import ContactSection from '../components/ContactSection';
import Link from '../components/Link';
import path from 'path';
import { showTemplateName } from '../lib/showTemplateNameUtil';
const templateName = path.basename(__filename);

// Non static query, see $id
export const query = graphql`
  query($id: String!) {
    sanityBrandbookPage(id: { eq: $id }) {
      title
      introTitle
      intro
      _rawSections(resolveReferences: { maxDepth: 10 })
      _rawSeo(resolveReferences: { maxDepth: 5 })
      contactSection {
        _key
        _type
        title
        contactIntro {
          _key
          _type
          style
          list
          sanityChildren {
            text
            marks
            _type
            _key
          }
        }
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
    site: sanitySiteSettings {
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
`;

export default ({ data, pageContext, location }) => {
  showTemplateName(templateName);
  const {
    title: title = '',
    intro: intro = '',
    introTitle: introTitle = '',
    _rawSeo: seo = null,
    _rawSections: sections = [],
    contactSection: contactSection = null
  } = data?.sanityBrandbookPage;

  const pageContactTitle =
    contactSection && contactSection?.title ? contactSection?.title : null;
  const pageContactIntro =
    contactSection && contactSection?.contactIntro
      ? contactSection?.contactIntro
      : null;
  const pageContactPersons =
    contactSection && contactSection?.persons ? contactSection?.persons : null;

  const {
    form: form = null,
    persons: defaultContactPersons = [],
    title: defaultContactTitle = null
  } = data?.site?.contactBlock;

  const scrollTo = toId => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      window.scrollTo({
        top: document.getElementById(toId).offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <section className="md:border-b border-solid border-black border-0 md:mb-16 md:pb-16">
          <MainHeading>{introTitle}</MainHeading>
          <div className="flex flex-wrap">
            {intro && <div className="text-md w-full md:w-1/2">{intro}</div>}
            <ul className="mt-4 mb-8 md:my-0 w-full md:w-1/3 ml-auto">
              <li className="pb-1 border-b border-solid border-black border-0">
                <h3 className="font-base font-bold">Innhold</h3>
              </li>
              {sections &&
                sections.map((section, i) => (
                  <li
                    key={section._key}
                    className={`py-1${i < sections.length - 1 &&
                      ' border-b border-solid border-black border-0'}`}
                  >
                    <button
                      type="button"
                      className="link"
                      aria-label={`Scroller til ${section.sectionTitle}`}
                      onClick={() => scrollTo(section._key)}
                    >
                      {section.sectionTitle}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </section>
        {sections &&
          sections.map((section, i) => (
            <section
              key={section._key}
              className={`${i < sections.length - 1 &&
                'mb-8 md:mb-16 md:pb-16 border-b border-solid border-black border-0'}`}
            >
              <MainHeading id={section._key} isH2>
                {section.sectionTitle}
              </MainHeading>
              {section?.content &&
                section.content.map(c => {
                  /* We need to use the raw field to render this objects block field */
                  if (c._type === 'textImage') {
                    return (
                      <div key={c._key} className="mb-8 md:mb-16">
                        <TextImage
                          image={c.image}
                          alt={c.alt}
                          imageLeft={c.imageLeft}
                          aspectRatio={c.aspectRatio}
                          isHalf
                        >
                          <PortableText blocks={c.textContent} />
                        </TextImage>
                      </div>
                    );
                  } else if (c._type === 'richText') {
                    return (
                      <div key={c._key} className="mb-8 md:mb-16">
                        <div className="w-full md:w-1/2 mx-auto">
                          <PortableText blocks={c.textContent} />
                        </div>
                      </div>
                    );
                  } else if (c._type === 'richTextLeft') {
                    return (
                      <div key={c._key} className="mb-8 md:mb-16">
                        <div className="w-full md:w-1/2">
                          <PortableText blocks={c.textContent} />
                        </div>
                      </div>
                    );
                  } else if (c._type === 'imageObject' && c.image?.asset) {
                    return (
                      <div key={c._key} className="mb-8 md:mb-16">
                        <Image
                          image={c.image}
                          alt={c.image?.alt}
                          aspectRatio={c?.aspectRatio}
                        />
                      </div>
                    );
                  } else if (c._type === 'imageX2') {
                    return (
                      <div key={c._key} className="mb-8 md:mb-16">
                        <ImageX2
                          imageLeft={c.imageLeft}
                          altLeft={c?.altLeft}
                          imageRight={c.imageRight}
                          altRight={c?.altRight}
                          aspectRatio={c?.aspectRatio}
                        />
                      </div>
                    );
                  } else if (c._type === 'colorBlock') {
                    return (
                      <div
                        key={c._key}
                        className="mb-8 md:mb-16 py-4 px-4"
                        style={{ backgroundColor: '#' + c.color }}
                      >
                        {c.title && <h3 className="text-sml">{c.title}</h3>}
                        {c.text && (
                          <h4 className="text-md pt-8 pb-4 px-4">{c.text}</h4>
                        )}
                      </div>
                    );
                  } else if (c._type === 'colorBlocks') {
                    return (
                      <div className="flex flex-wrap" key={c._key}>
                        {typeof c.blocks === 'object' &&
                          c.blocks.map(block => (
                            <div
                              key={block._key}
                              className={`w-full md:w-${
                                c.blocks.length > 2 ? '1/3' : '1/2'
                              }`}
                            >
                              <div
                                className="md:mx-4 mb-8 md:mb-16 py-4 px-4"
                                style={{ backgroundColor: '#' + block.color }}
                              >
                                {block.title && (
                                  <h3 className="text-sml">{block.title}</h3>
                                )}
                                {block.text && (
                                  <h4 className="text-md pt-8 pb-4 px-4">
                                    {block.text}
                                  </h4>
                                )}
                              </div>
                            </div>
                          ))}
                      </div>
                    );
                  } else if (c._type === 'downloadBlocks') {
                    return (
                      <div className="flex flex-wrap" key={c._key}>
                        {typeof c.blocks === 'object' &&
                          c.blocks.map(block => (
                            <div
                              key={block._key}
                              className={`w-full md:w-1/${c.blocks.length}`}
                            >
                              <div className="mb-8 md:mb-16 py-4">
                                {block.description && (
                                  <h3 className="text-sml">
                                    {block.description}
                                  </h3>
                                )}
                                {block.linkTo && (
                                  <Link
                                    href={block.linkTo}
                                    title={block.linkText}
                                    className="link font-lining"
                                  >
                                    {block.linkText}
                                  </Link>
                                )}
                              </div>
                            </div>
                          ))}
                      </div>
                    );
                  } else if (c._type === 'colorPaletteBlocks') {
                    return (
                      <div className="flex flex-wrap" key={c._key}>
                        {typeof c.blocks === 'object' &&
                          c.blocks.map(block => (
                            <div key={block._key} className="w-full md:w-1/4">
                              <div className="mb-8 md:mb-16 py-4">
                                {block.colorHex && (
                                  <div
                                    className="my-2 relative w-auto"
                                    style={{
                                      maxWidth: '150px',
                                      minWidth: '50px'
                                    }}
                                  >
                                    <svg viewBox="0 0 2 2">
                                      <circle
                                        cx="1"
                                        cy="1"
                                        r="1"
                                        fill={block.colorHex}
                                      ></circle>
                                    </svg>
                                  </div>
                                )}
                                {block.title && (
                                  <h3 className="text-sml font-bold">
                                    {block.title}
                                  </h3>
                                )}
                                {/* TODO: add copy to clipboard function. */}
                                {block.colorHex && <p>{block.colorHex}</p>}
                                {block.colorVariable && (
                                  <p>{block.colorVariable}</p>
                                )}
                                {block.colorRgb && <p>{block.colorRgb}</p>}
                                {block.colorCmykC && <p>{block.colorCmykC}</p>}
                                {block.colorCmykU && <p>{block.colorCmykU}</p>}
                                {block.colorPantone && (
                                  <p>{block.colorPantone}</p>
                                )}
                              </div>
                            </div>
                          ))}
                      </div>
                    );
                  }
                  return null;
                })}
            </section>
          ))}
          {form && (
            <div className="pt-16 border-solid border-black border-t">
              <ContactSection
                form={form}
                heading={pageContactTitle || defaultContactTitle}
                intro={pageContactIntro}
                persons={pageContactPersons || defaultContactPersons}
              />
            </div>
          )}
      </Layout>
    </>
  );
};
