import React from 'react';
import { graphql } from 'gatsby';
import { isBrowser } from 'react-device-detect';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import PortableText from '../components/PortableText';
import Image from '../components/Image';
import TextImage from '../components/TextImage';
import ContactSection from '../components/ContactSection';
import Video from '../components/Video';

// Non static query, see $id
export const query = graphql`
  query($id: String!) {
    sanityCases(id: { eq: $id }) {
      title
      _rawIntro(resolveReferences: { maxDepth: 10 })
      slug {
        current
      }
      mainImage {
        image {
          ...ImageFragment
        }
        alt
      }
      quote {
        quoteCompany
        quoteName
        quoteText
      }
      _rawResults(resolveReferences: { maxDepth: 3 })
      _rawContent(resolveReferences: { maxDepth: 10 })
      _rawSeo(resolveReferences: { maxDepth: 5 })
      contactPersonsBlock {
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
  const {
    title: title = '',
    _rawIntro: intro = null,
    _rawContent: content = [],
    mainImage: mainImage = null,
    _rawSeo: seo = null,
    _rawResults: results = null,
    quote: quote = null,
  } = data?.sanityCases;

  const formHeading = data?.sanityCases?.contactPersonsBlock?.heading || null;
  const persons = data?.sanityCases?.contactPersonsBlock?.persons || null;

  const {
    form: form = null,
    persons: defaultPersons = [],
    title: defaultHeading = null,
  } = data?.site?.contactBlock;

  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <article>
          <h1 className="text-xl -mt-2 mb-4">{title}</h1>
          <div className="mb-16">
            {intro?.textContent && (
              <PortableText blocks={intro.textContent} />
            )}
          </div>
          <div className="mb-16">
            {mainImage?.image?.asset && <Image image={mainImage.image} alt={mainImage.alt} />}
          </div>
          <div className="mb-16">
            {content &&
              content.map(c => {
                /* We need to use the raw field to render this objects block field */
                if (c._type === 'textImage') {
                  return (
                    <div className="my-8 md:my-16" key={c._key}>
                      <TextImage
                        image={c.image}
                        alt={c.alt}
                        imageLeft={c.imageLeft}
                        isHalf
                      >
                        <h2 className="text-lg mb-4">{c.name}</h2>
                        <PortableText blocks={c.textContent} />
                      </TextImage>
                    </div>
                  );
                } else if (c._type === 'richText') {
                  return (
                    <div className="my-8 md:my-16 md:w-2/3 mx-auto" key={c._key}>
                      <PortableText blocks={c.textContent} />
                    </div>
                  );
                } else if (c._type === 'imageObject' && c.image?.asset) {
                  return (
                    <div className="my-8 md:w-3/4 mx-auto" key={c._key}>
                      <Image image={c.image} alt={c.image?.alt} />
                    </div>
                  );
                } else if (c._type === 'videoObject') {
                  return (
                    <div className="my-8 md:w-3/4 mx-auto" key={c._key}>
                      {
                        isBrowser && c?.video?.asset?.playbackId && ( <Video id={c.video.asset.playbackId} placeholder={true} />)
                      }
                    </div>
                  );
                }
                return '';
              })}
          </div>
          {results && (
            <div className="mb-16 pt-16 border-solid border-black border-t">
              {results?.resultsHeading && <h2 className="text-xl">{results.resultsHeading}</h2>}
              {results?.resultsIntro && (
                <div className="w-full md:w-1/2 mt-8">   
                  {results?.resultsIntro && <p className="text-base">{results.resultsIntro}</p>}
                </div>
              )}
              {results?.resultColumns && (
                <div className="flex flex-wrap -mx-4">
                  {
                    results.resultColumns.map((column) => (
                      <div key={column._key} className="w-full px-4 md:w-1/3">
                        <h3 className="mt-8">
                          <span className="block text-xl">{column.resultValue}</span>
                          <span className="text-base block">{column.resultLabel}</span>
                        </h3>
                      </div>
                    ))
                  }
                </div>
              )}
            </div>
          )}
          {quote && (
            <blockquote className="mb-16 pt-16 border-solid border-black border-t">
              {quote?.quoteText && <p className="text-xl">— {quote.quoteText}</p>}
              {(quote?.quoteName || quote?.quoteCompany) && (
                <footer className="mt-8 block">
                  <p>
                    {quote?.quoteName && <span className="text-base font-bold block">{quote.quoteName}</span>}
                    {quote?.quoteCompany && <span>{quote.quoteCompany}</span>}  
                  </p>
                </footer>
              )}
            </blockquote>
          )}
        </article>
        <div className="pt-16 border-solid border-black border-t">
          <ContactSection heading={formHeading || defaultHeading} persons={persons || defaultPersons} form={form} />
        </div>
      </Layout>
    </>
  );
};
