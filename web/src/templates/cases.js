import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { orderBy } from 'lodash';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import InputField from '../components/InputField';
import MainHeading from '../components/MainHeading';
import PortableText from '../components/PortableText';
import Image from '../components/Image';
import Link from '../components/Link';

const Events = ({ pageContext, location }) => {
  const { page, cases } = useStaticQuery(
    graphql`
      {
        page: sanityCasesListing {
          id
          title
          intro
          _rawSeo(resolveReferences: { maxDepth: 5 })
        }
        cases: allSanityCases {
          nodes {
            id
            title
            _rawIntro(resolveReferences: { maxDepth: 1 })
            slug {
              current
            }
            mainImage {
              image {
                ...ImageFragment
              }
              alt
            }
            serviceCategories {
              title
              slug {
                current
              }
              id
            }
          }
        }
      }
    `
  );

  const {
    title: title = '',
    intro: intro = '',
    _rawSeo: seo = [],
  } = page;

  const allCases = cases?.nodes || null;
  const [nameQuery, setNameQuery] = useState('');
  const [caseCategories, setCaseCategories] = useState([]);
  const [filterCategoryQuery, setFilterCategoryQuery] = useState('');
  const [sortedCases, setSortedCases] = useState(null);

  useEffect(() => {
    if (allCases) {
      // Set default sorting.
      if(!sortedCases) {
        setSortedCases(sortCases(allCases, 'title'));
      }
    }
    const categories = [];
    sortedCases && sortedCases.map(c => {
      const casesCategories = c?.serviceCategories || [];  
      casesCategories.map(category => {
        if(!categories.includes(category.title)) {
          categories.push(category.title);
        }
      })
    });
    caseCategories.length === 0 && setCaseCategories(categories);
  }, [allCases, sortedCases, caseCategories]);

  const sortCases = (cases, key) => {
    return _.orderBy(cases, key, 'asc');
  };

  const renderCase = (c) => {
    // Render list item.
    let includeThis = true;

    if(filterCategoryQuery !== '' && c?.serviceCategories) {
      c.serviceCategories.map(serviceCategory => {
        if(!serviceCategory.title.toLowerCase().includes(filterCategoryQuery.toLowerCase())) {
          includeThis = false;
        } else {
          includeThis = true;
        }
      })
    }

    // If user has typed something. Check if we can find a match and whitelist case.
    if (nameQuery !== '' && !c.title.toLowerCase().includes(nameQuery.toLowerCase())) {
      includeThis = false;
    }

    return includeThis ? (
      <li key={c.id} className="w-full md:border-b border-solid border-black border-0 pb-12">
        <div className="mt-12 md:flex" key={c.id}>
          <div className="w-full md:w-1/4 md:mr-8">
            {c?.mainImage?.asset && <Image image={c.mainImage.image} alt={c.mainImage.alt} aspectRatio="1:1" />}
          </div>
          <div>
            <h3 className="text-lg mt-4 md:mt-0">
              <Link slug={c.slug.current} title={c.title} className="font-lining link">{c.title}</Link>
            </h3>
            {c._rawIntro?.textContent && (
              <PortableText blocks={c._rawIntro.textContent} />
            )}
          </div>
        </div>
      </li>
    ) : null;
  };

  return (
    <>
      <SEO title={title} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading tight>{title}</MainHeading>
        <p className="text-lg mb-12 w-full md:w-1/2">{intro}</p>
        <div className="flex flex-wrap mt-10 mb-16 -mx-4">
          <div className="relative w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <InputField inputType="text" labelText="Søk" placeholder="Referanse" value={nameQuery} onChange={value => setNameQuery(value)} />
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
                <option key={`cat-opt-${i}`} name={c}>{c}</option>
              ))}
            </select>
            <div className="absolute bottom-0 right-0 mr-6 mb-1"></div>
          </div>
        </div>
        {sortedCases && (
          <ul className="mb-16">
            {sortedCases.map(c => renderCase(c))}
          </ul>
        )}
      </Layout>
    </>
  );
};

export default Events;
