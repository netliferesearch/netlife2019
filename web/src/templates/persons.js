import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import PersonGroup from '../components/PersonGroup';
import Layout from '../containers/layout';
import { mapEdgesToNodes } from '../lib/helpers';

import {
  alphaGroupPersons,
  filteredPersonList
} from '../lib/personFilter/personFilter';

export const query = graphql`
  {
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
            asset {
              fluid(maxWidth: 260, maxHeight: 260) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const PersonsTemplate = props => {
  const { data, errors } = props;
  const [filteredAlphaPersons, setFilteredAlphaPersons] = useState({});
  const [persons] = useState(mapEdgesToNodes(data.allSanityPerson));
  const [nameQuery, setNameQuery] = useState('');
  const [serviceQuery, setserviceQuery] = useState('');
  const [officeQuery, setOfficeQuery] = useState('');
  const [services, setServices] = useState([]);
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    if (
      data.allSanityPerson &&
      data.allSanityPerson.edges &&
      data.allSanityPerson.edges.length
    ) {
      // Makes a list of all services without duplicates
      setServices([
        ...new Set(
          mapEdgesToNodes(data.allSanityPerson)
            .map(p => p.services.map(s => s.name))
            .flat()
        )
      ]);
      // Makes a list of all office names without duplicates
      setOffices([
        ...new Set(
          mapEdgesToNodes(data.allSanityPerson).map(p => p.office.name)
        )
      ]);
    }
  }, [data.allSanityPerson]);

  useEffect(() => {
    setFilteredAlphaPersons(
      alphaGroupPersons(
        filteredPersonList(persons, nameQuery, serviceQuery, officeQuery)
      )
    );
  }, [persons, nameQuery, serviceQuery, officeQuery]);

  return (
    <>
      <SEO
        title={'Folka i Netlife'}
        description={'En trivelig gjeng med engasjerte og rause fagfolk.'}
      />
      <Layout>
        {errors && <SEO title="GraphQL Error" />}
        <h1 className="text-xl">Folka i Netlife</h1>
        <p className="text-lg my-8 pt-2 w-full md:w-1/2">
          En trivelig gjeng med engasjerte og rause fagfolk.
        </p>

        {errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )}
        <div className="flex flex-wrap mt-10 mb-6 -mx-4">
          <div className="relative w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <label htmlFor="search-name" className="inline-block pb-1">
              Søk
            </label>
            <input
              onChange={e => setNameQuery(e.currentTarget.value)}
              type="text"
              placeholder="Navn"
              id="search-name"
              value={nameQuery}
              className="w-full pl-2 py-1 appearance-none placeholder-smoke-400 border-2 border-black rounded-none outline-none focus:bg-green"
            />

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
              className="w-full appearance-none bg-white pl-2 py-1 border-2 border-black rounded-none focus:bg-green outline-none"
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
              className="w-full appearance-none bg-white pl-2 py-1 border-2 border-black rounded-none focus:bg-green outline-none"
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

export default PersonsTemplate;
