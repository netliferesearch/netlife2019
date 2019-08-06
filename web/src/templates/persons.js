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
        <p className="text-lg my-8 w-full md:w-1/2">
          En trivelig gjeng med engasjerte og rause fagfolk.
        </p>

        {errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )}

        {Object.keys(alphaGroupPersons)
          .sort()
          .map(groupKey => (
            <PersonGroup
              key={groupKey}
              persons={alphaGroupPersons[groupKey]}
              groupKey={groupKey}
            />
          ))}
      </Layout>
    </>
  );
};

export default PersonsTemplate;
