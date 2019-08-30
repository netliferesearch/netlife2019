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
            _rawText
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
      context: { id }
    });
  });
}

async function createContactPage(actions, reporter) {
  const { createPage } = actions;

  reporter.info(`Creating contact page.`);

  createPage({
    path: '/kontakt',
    component: require.resolve('./src/templates/contact.js')
  });
}

async function createJobListPage(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      sanityJobAdvertListing(_id: { eq: "jobAdvertListing" }) {
        title
        _rawAdditionalContent(resolveReferences: { maxDepth: 5 })
        _rawJobAdverts(resolveReferences: { maxDepth: 5 })
      }
    }
  `);

  if (result.errors) throw result.errors;

  const {
    title,
    _rawJobAdverts,
    _rawAdditionalContent
  } = result.data.sanityJobAdvertListing;

  reporter.info(`Creating job list page.`);

  createPage({
    path: '/jobb/',
    component: require.resolve('./src/templates/events.js'),
    context: {
      title,
      events: _rawJobAdverts,
      additionalContent: _rawAdditionalContent
    }
  });
}

async function createPersonsPage(actions, reporter) {
  const { createPage } = actions;

  reporter.info(`Creating persons page.`);

  createPage({
    path: '/folka/',
    component: require.resolve('./src/templates/persons.js')
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createContactPage(actions, reporter);
  await createPersonsPage(actions, reporter);
  await createPersonBioPages(graphql, actions, reporter);
  await createArticlePage(graphql, actions, reporter);
  await createJobListPage(graphql, actions, reporter);
};
