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

  const articleEdges = (result.data.allSanityArticle || {}).edges || [];

  articleEdges.forEach(edge => {
    const { slug, id } = edge.node;

    const path = `/${slug.current}/`;

    reporter.info(`Creating article page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/article.js'),
      context: {
        id
      }
    });
  });
}

async function createBlogPostPage(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityBlogPost {
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

  const blogPostEdges = (result.data.allSanityBlogPost || {}).edges || [];

  blogPostEdges.forEach(edge => {
    const { slug, id } = edge.node;

    const path = `${slug.current}`;

    reporter.info(`Creating blog post page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/blogPost.js'),
      context: {
        id,
        breadcrumb: {
          title: 'Blogg',
          path: '/blogg/'
        }
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

    const path = `/${slug.current}/`;

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

  const jobAdvertEdges = (result.data.allSanityJobAdvert || {}).edges || [];

  jobAdvertEdges.forEach(edge => {
    const {
      id: id = '?',
      slug: { current: currentPath = '' } = {}
    } = edge.node;
    debugger;

    reporter.info(`Creating job advert page: ${currentPath}`);

    createPage({
      path: currentPath,
      component: require.resolve('./src/templates/jobAdvert.js'),
      context: {
        id,
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

async function createAboutPage(actions, reporter) {
  const { createPage } = actions;

  reporter.info(`Creating about page.`);

  createPage({
    path: '/hvem-vi-er/',
    component: require.resolve('./src/templates/about.js'),
    context: {
      breadcrumb: {
        title: 'Hvem vi er',
        path: '/hvem-vi-er/'
      }
    }
  });
}

async function createJobListPage(actions, reporter) {
  const { createPage } = actions;

  reporter.info(`Creating job list page.`);

  createPage({
    path: '/jobb/',
    component: require.resolve('./src/templates/events.js'),
    context: {
      breadcrumb: {
        title: 'Jobb',
        path: '/jobb/'
      }
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
  await createAboutPage(actions, reporter);
  await createContactPage(actions, reporter);
  await createPersonsPage(actions, reporter);
  await createPersonBioPages(graphql, actions, reporter);
  await createJobAdvert(graphql, actions, reporter);
  await createArticlePage(graphql, actions, reporter);
  await createBlogPostPage(graphql, actions, reporter);
  await createJobListPage(actions, reporter);
};
