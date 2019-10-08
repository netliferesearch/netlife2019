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

async function createEvent(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityEvent {
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

  const eventEdges = (result.data.allSanityEvent || {}).edges || [];

  eventEdges.forEach(edge => {
    const {
      id: id = '?',
      slug: { current: currentPath = '' } = {}
    } = edge.node;
    debugger;

    reporter.info(`Creating event page: ${currentPath}`);

    createPage({
      path: currentPath,
      component: require.resolve('./src/templates/event.js'),
      context: {
        id,
        breadcrumb: {
          title: 'Event',
          path: '/event/'
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
    component: require.resolve('./src/templates/jobs.js'),
    context: {
      breadcrumb: {
        title: 'Jobb',
        path: '/jobb/'
      }
    }
  });
}

async function createEventListPage(actions, reporter) {
  const { createPage } = actions;

  reporter.info(`Creating job list page.`);

  createPage({
    path: '/event/',
    component: require.resolve('./src/templates/events.js'),
    context: {
      breadcrumb: {
        title: 'Event',
        path: '/event/'
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

async function createNewsletterPage(actions, reporter) {
  const { createPage } = actions;

  reporter.info(`Creating newsletter page.`);

  createPage({
    path: '/nyhetsbrev/',
    component: require.resolve('./src/templates/newsletter.js'),
    context: {
      breadcrumb: {
        title: 'Nyhetsbrev',
        path: '/nyhetsbrev/'
      }
    }
  });
}

async function createServicesPage(actions, reporter) {
  const { createPage } = actions;

  reporter.info(`Creating services page.`);

  createPage({
    path: '/ting-vi-gjor/',
    component: require.resolve('./src/templates/services.js'),
    context: {
      breadcrumb: {
        title: 'Ting vi gjør',
        path: '/ting-vi-gjor/'
      }
    }
  });
}

async function createCasesPage(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityCases {
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

  const casesEdges = (result.data.allSanityCases || {}).edges || [];

  casesEdges.forEach(edge => {
    const { slug, id } = edge.node;

    const path = `${slug.current}`;

    reporter.info(`Creating case page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/case.js'),
      context: {
        id,
        breadcrumb: {
          title: 'Case',
          path: '/case/'
        }
      }
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createAboutPage(actions, reporter);
  await createContactPage(actions, reporter);
  await createPersonsPage(actions, reporter);
  await createPersonBioPages(graphql, actions, reporter);
  await createJobAdvert(graphql, actions, reporter);
  await createEvent(graphql, actions, reporter);
  await createArticlePage(graphql, actions, reporter);
  await createBlogPostPage(graphql, actions, reporter);
  await createJobListPage(actions, reporter);
  await createEventListPage(actions, reporter);
  await createNewsletterPage(actions, reporter);
  await createServicesPage(actions, reporter);
  await createCasesPage(graphql, actions, reporter);
};
