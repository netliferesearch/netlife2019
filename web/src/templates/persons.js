import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import PersonGroup from '../components/PersonGroup';
import MainHeading from '../components/MainHeading';
import InputField from '../components/InputField';
import Layout from '../containers/layout';
import { mapEdgesToNodes } from '../lib/helpers';
import {
  alphaGroupPersons,
  filteredPersonList
} from '../lib/personFilter/personFilter';

export default ({ pageContext, location }) => {
  const { allSanityPerson, sanityPeopleOverview } = useStaticQuery(
    graphql`
      query {
        sanityPeopleOverview {
          heading
          intro
          _rawSeo(resolveReferences: { maxDepth: 5 })
        }
        allSanityPerson {
          edges {
            node {
              _id
              name
              slug {
                current
              }
              email
              office {
                name
              }
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
      }
    `
  );

  const [filteredAlphaPersons, setFilteredAlphaPersons] = useState({});
  const [persons] = useState(mapEdgesToNodes(allSanityPerson));
  const [nameQuery, setNameQuery] = useState('');
  const [serviceQuery, setserviceQuery] = useState('');
  const [officeQuery, setOfficeQuery] = useState('');
  const [services, setServices] = useState([]);
  const [offices, setOffices] = useState([]);

  const heading = sanityPeopleOverview?.heading || '';
  const intro = sanityPeopleOverview?.intro || '';
  const seo = sanityPeopleOverview?._rawSeo || null;

  useEffect(() => {
    if (allSanityPerson?.edges?.length) {
      // Makes a list of all services without duplicates
      setServices([
        ...new Set(
          mapEdgesToNodes(allSanityPerson)
            .map(p => p.services.map(s => s.name))
            .flat()
        )
      ]);
      // Makes a list of all office names without duplicates
      setOffices([
        ...new Set(mapEdgesToNodes(allSanityPerson).map(p => p.office.name))
      ]);
    }
  }, [allSanityPerson]);

  useEffect(() => {
    setFilteredAlphaPersons(
      alphaGroupPersons(
        filteredPersonList(persons, nameQuery, serviceQuery, officeQuery)
      )
    );
  }, [persons, nameQuery, serviceQuery, officeQuery]);

  return (
    <>
      <SEO title={heading} description={intro} seo={seo} location={location} />
      <Layout breadcrumb={pageContext.breadcrumb}>
        <MainHeading tight>{heading}</MainHeading>
        <p className="text-lg mb-12 w-full md:w-1/2">{intro}</p>
        <div className="flex flex-wrap mt-10 mb-6 -mx-4">
          <div className="relative w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <InputField inputType="text" labelText="Søk" placeholder="Navn" value={nameQuery} onChange={value => setNameQuery(value)} />
            <div className="absolute bottom-0 right-0 mr-6 mb-1"></div>
          </div>
          <div className="relative w-1/2 md:w-1/4 px-4">
            <label htmlFor="search-office" className="inline-block pb-1">
              Kontor
            </label>
            <select
              onChange={e => setOfficeQuery(e.currentTarget.value)}
              value={officeQuery}
              id="search-office"
              className="w-full appearance-none bg-white pl-2 py-1 border border-black rounded-none focus:bg-green outline-none"
            >
              <option value="">Alle</option>
              {offices.map(office => (
                <option key={office}>{office}</option>
              ))}
            </select>
            <div className="absolute bottom-0 right-0 mr-6 mb-1"></div>
          </div>
          <div className="relative w-1/2 md:w-1/4 px-4">
            <label htmlFor="search-service" className="inline-block pb-1">
              Fagområde
            </label>
            <select
              onChange={e => setserviceQuery(e.currentTarget.value)}
              value={serviceQuery}
              id="search-service"
              className="w-full appearance-none bg-white pl-2 py-1 border border-black rounded-none focus:bg-green outline-none"
            >
              <option value="">Alle</option>
              {services.map(service => (
                <option key={service}>{service}</option>
              ))}
            </select>
            <div className="absolute bottom-0 right-0 mr-6 mb-1"></div>
          </div>
        </div>
        {
          <div className="mb-6">
            {Object.keys(filteredAlphaPersons)
              .sort()
              .map(groupKey => (
                <PersonGroup
                  key={groupKey}
                  persons={filteredAlphaPersons[groupKey]}
                  groupKey={groupKey}
                />
              ))}
            {Object.keys(filteredAlphaPersons).length === 0 && (
              <div className="text-center my-12">
                Vi fant ingen med de søkekriteriene
              </div>
            )}
          </div>
        }
      </Layout>
    </>
  );
};
