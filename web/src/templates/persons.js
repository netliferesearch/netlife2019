import React from 'react';
import { graphql } from 'gatsby';

import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import PersonGroup from '../components/PersonGroup';
import Layout from '../containers/layout';
import { mapEdgesToNodes } from '../lib/helpers';

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
          roles
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

  const persons = mapEdgesToNodes(data.allSanityPerson);

  const alphaGroupPersons = persons.reduce((acc, current) => {
    // Take the first letter in the name
    const getFirstLetter = item => item.name[0];
    // Check if its the first iteration
    if (acc) {
      // Check if there are any items in the key, and add the item to its array
      return {
        ...acc,
        [getFirstLetter(current)]: acc[getFirstLetter(current)]
          ? [...acc[getFirstLetter(current)], current]
          : [current]
      };
    }
    // Returns a key with the first letter in the objects name prop, and adds to object to the array
    return {
      [getFirstLetter(current)]: [current]
    };
  }, null);

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
              type="text"
              placeholder="Navn"
              id="search-name"
              className="w-full pl-2 py-1 appearance-none border-2 border-black rounded-none outline-none focus:bg-green"
            />

            <div className="absolute bottom-0 right-0 mr-6 mb-1"></div>
          </div>
          <div className="relative w-1/2 md:w-1/4 px-4">
            <label htmlFor="search-office" className="inline-block pb-1">
              Kontor
            </label>
            <select
              name=""
              id="search-office"
              className="w-full appearance-none pl-2 py-1 border-2 border-black rounded-none focus:bg-green outline-none"
            >
              <option value="a">Alle</option>
              <option value="b">b</option>
              <option value="c">c</option>
            </select>
            <div className="absolute bottom-0 right-0 mr-6 mb-1"></div>
          </div>
          <div className="relative w-1/2 md:w-1/4 px-4">
            <label htmlFor="search-role" className="inline-block pb-1">
              Fagområde
            </label>
            <select
              name=""
              id="search-role"
              className="w-full appearance-none pl-2 py-1 border-2 border-black rounded-none focus:bg-green outline-none"
            >
              <option value="a">Alle</option>
              <option value="b">b</option>
              <option value="c">c</option>
            </select>
            <div className="absolute bottom-0 right-0 mr-6 mb-1"></div>
          </div>
        </div>
        <div className="mb-6">
          {Object.keys(alphaGroupPersons)
            .sort()
            .map(groupKey => (
              <PersonGroup
                key={groupKey}
                persons={alphaGroupPersons[groupKey]}
                groupKey={groupKey}
              />
            ))}
        </div>
      </Layout>
    </>
  );
};

export default PersonsTemplate;
