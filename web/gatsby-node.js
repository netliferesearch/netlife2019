/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createArticlePage(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityArticle {
        edges {
          node {
            name
            title
            slug {
              current
            }
            _rawText(resolveReferences: { maxDepth: 10 })
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const articleEdges = (result.data.allSanityArticle || {}).edges || [];

  articleEdges.forEach(edge => {
    const { slug, name, title, _rawText } = edge.node;

    const path = `/${slug.current}/`;

    reporter.info(`Creating article page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/article.js'),
      context: {
        name,
        title,
        _rawText
      }
    });
  });
}

async function createPersonBioPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPerson {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const personEdges = (result.data.allSanityPerson || {}).edges || [];

  personEdges.forEach(edge => {
    const { id, slug } = edge.node;

    const path = `/folka/${slug.current}/`;

    reporter.info(`Creating person page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/personBio.js'),
      context: {
        id,
        breadcrumb: {
          title: 'Folka',
          path: '/folka/'
        }
      }
    });
  });
}

async function createJobAdvert(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityJobAdvert {
        edges {
          node {
            title
            image {
              hotspot {
                y
                x
                width
                height
                _type
                _key
              }
              crop {
                top
                right
                left
                bottom
                _type
                _key
              }
              asset {
                _id
              }
            }
            slug {
              current
            }
            intro
            deadline
            _rawText(resolveReferences: { maxDepth: 5 })
            outroImage {
              asset {
                fixed(width: 2180, height: 1453) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const jobAdvertEdges = (result.data.allSanityJobAdvert || {}).edges || [];

  jobAdvertEdges.forEach(edge => {
    const {
      slug,
      title,
      intro,
      image,
      deadline,
      _rawText,
      outroImage
    } = edge.node;

    const path = slug.current;

    reporter.info(`Creating job advert page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/jobAdvert.js'),
      context: {
        title,
        intro,
        deadline,
        image,
        _rawText,
        outroImage,
        breadcrumb: {
          title: 'Jobb',
          path: '/jobb/'
        }
      }
    });
  });
}

async function createContactPage(actions, reporter) {
  const { createPage } = actions;

  reporter.info(`Creating contact page.`);

  createPage({
    path: '/kontakt/',
    component: require.resolve('./src/templates/contact.js'),
    context: {
      breadcrumb: {
        title: 'Kontakt',
        path: '/kontakt/'
      }
    }
  });
}

async function createJobListPage(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      sanityJobAdvertListing(_id: { eq: "jobAdvertListing" }) {
        title
        _rawJobAdverts(resolveReferences: { maxDepth: 5 })
        _rawAdditionalContent(resolveReferences: { maxDepth: 5 })
        additionalContent {
          __typename
          ... on SanityContactSection {
            _key
            _type
            persons {
              _id
              image {
                asset {
                  fixed(height: 300, width: 300) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const {
    title,
    _rawJobAdverts,
    _rawAdditionalContent,
    additionalContent
  } = result.data.sanityJobAdvertListing;

  reporter.info(`Creating job list page.`);

  createPage({
    path: '/jobb/',
    component: require.resolve('./src/templates/events.js'),
    context: {
      breadcrumb: {
        title: 'Jobb',
        path: '/jobb/'
      },
      title,
      events: _rawJobAdverts,
      additionalContent: _rawAdditionalContent,
      contactSectionImages: additionalContent
        // Gets the image urls for the persons in ContactSection
        // contactSectionImages: additionalContent
        // Filter out only this type, there may be more than one
        .filter(x => x.__typename === 'SanityContactSection')
        // Get the persons
        .map(x => x.persons)
        // Since we may be dealing with multiple ContactSections, we want to flatten the array, which is an array within an array
        .flatMap(x => x)
        // Returns an object with the person ID and its image url
        .map(
          person =>
            person.image &&
            person.image.asset && {
              id: person._id,
              img: person.image.asset.fixed.src
            }
        )
        .filter(x => x)
    }
  });
}

async function createPersonsPage(actions, reporter) {
  const { createPage } = actions;

  reporter.info(`Creating persons page.`);

  createPage({
    path: '/folka/',
    component: require.resolve('./src/templates/persons.js'),
    context: {
      breadcrumb: {
        title: 'Folka',
        path: '/folka/'
      }
    }
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createContactPage(actions, reporter);
  await createPersonsPage(actions, reporter);
  await createPersonBioPages(graphql, actions, reporter);
  await createJobAdvert(graphql, actions, reporter);
  await createArticlePage(graphql, actions, reporter);
  await createJobListPage(graphql, actions, reporter);
};
