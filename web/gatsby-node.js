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
            _id
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
    const { _id, slug, id } = edge.node;

    if (!_id.startsWith('drafts.')) {
      const path = `${slug.current}`;

      reporter.info(`Creating article page: ${path}`);

      createPage({
        path,
        component: require.resolve('./src/templates/article.js'),
        context: {
          id
        }
      });
    }
  });
}

async function createFormPage(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityFormPage {
        edges {
          node {
            _id
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
  const formPageEdges = (result.data.allSanityFormPage || {}).edges || [];
  formPageEdges.forEach(edge => {
    const { _id, slug, id } = edge.node;

    if (!_id.startsWith('drafts.')) {
      const path = `${slug.current}`;
      reporter.info(`Creating form page: ${path}`);
      createPage({
        path,
        component: require.resolve('./src/templates/formPage.js'),
        context: {
          id
        }
      });
    }
  });
}

async function createBlogPostPage(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityBlogPost {
        edges {
          node {
            _id
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
    const { _id, slug, id } = edge.node;

    if (!_id.startsWith('drafts.')) {
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
    }
  });
}

async function createPersonBioPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPerson(filter: {inactive: {ne: true}}) {
        edges {
          node {
            _id
            id
            inactive
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
    const { _id, id, slug, inactive } = edge.node;

    if (!_id.startsWith('drafts.') || inactive !== true) {
      const path = `${slug.current}`;

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
    }
  });
}

async function createJobAdvert(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityJobAdvert {
        edges {
          node {
            _id
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
      _id: _id = null,
      id: id = '?',
      slug: { current: currentPath = '' } = {}
    } = edge.node;
    debugger;

    if (!_id.startsWith('drafts.')) {
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
    }
  });
}

async function createEvent(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityEvent {
        edges {
          node {
            _id
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
      _id: _id = null,
      id: id = '?',
      slug: { current: currentPath = '' } = {}
    } = edge.node;
    debugger;

    if (!_id.startsWith('drafts.')) {
      reporter.info(`Creating event page: ${currentPath}`);

      createPage({
        path: currentPath,
        component: require.resolve('./src/templates/event.js'),
        context: {
          id,
          breadcrumb: {
            title: 'Kurs og konferanser',
            path: '/kurs-og-konferanser/'
          }
        }
      });
    }
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

async function createOfficesPage(actions, reporter) {
  const { createPage } = actions;

  reporter.info(`Creating offices page.`);

  createPage({
    path: '/kontor/',
    component: require.resolve('./src/templates/offices.js'),
    context: {
      breadcrumb: {
        title: 'Kontor',
        path: '/kontor/'
      }
    }
  });
}

async function createBergenPage(actions, reporter) {
  const { createPage } = actions;

  reporter.info(`Creating offices page.`);

  createPage({
    path: '/bergen/',
    component: require.resolve('./src/templates/bergen.js'),
    context: {
      breadcrumb: {
        title: 'Bergen',
        path: '/bergen/'
      }
    }
  });
}

async function createOfficePages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityOffice {
        edges {
          node {
            _id
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

  const officeEdges = (result.data.allSanityOffice || {}).edges || [];

  officeEdges.forEach(edge => {
    const { _id, id, slug } = edge.node;

    if (!_id.startsWith('drafts.')) {
      const path = `${slug.current}`;

      reporter.info(`Creating office page: ${path}`);

      createPage({
        path,
        component: require.resolve('./src/templates/office.js'),
        context: {
          id,
          breadcrumb: {
            title: 'Kontor',
            path: '/kontor/'
          }
        }
      });
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
    path: '/kurs-og-konferanser/',
    component: require.resolve('./src/templates/events.js'),
    context: {
      breadcrumb: {
        title: 'Kurs og konferanser',
        path: '/kurs-og-konferanser/'
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
    path: '/tjenester/',
    component: require.resolve('./src/templates/services.js'),
    context: {
      breadcrumb: {
        title: 'Tjenester',
        path: '/tjenester/'
      }
    }
  });
}

async function createServicePages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityService {
        edges {
          node {
            _id
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

  const serviceEdges = (result.data.allSanityService || {}).edges || [];

  serviceEdges.forEach(edge => {
    const { _id, id, slug } = edge.node;

    if (!_id.startsWith('drafts.')) {
      const path = `${slug.current}`;

      reporter.info(`Creating service page: ${path}`);

      createPage({
        path,
        component: require.resolve('./src/templates/service.js'),
        context: {
          id,
          breadcrumb: {
            title: 'Tjenester',
            path: '/tjenester/'
          }
        }
      });
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
            _id
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
    const { slug, id, _id } = edge.node;

    if (!_id.startsWith('drafts.')) {
      const path = `${slug.current}`;

      reporter.info(`Creating case page: ${path}`);

      createPage({
        path,
        component: require.resolve('./src/templates/case.js'),
        context: {
          id,
          breadcrumb: {
            title: 'Referanser',
            path: '/referanser/'
          }
        }
      });
    }
  });
}

async function createCasesListingPage(actions, reporter) {
  const { createPage } = actions;

  reporter.info(`Creating cases page.`);

  createPage({
    path: '/referanser/',
    component: require.resolve('./src/templates/cases.js'),
    context: {
      breadcrumb: {
        title: 'Referanser',
        path: '/referanser/'
      }
    }
  });
}

async function createBlogPostsPage(actions, reporter) {
  const { createPage } = actions;

  reporter.info(`Creating blog posts page.`);

  createPage({
    path: '/blogg/',
    component: require.resolve('./src/templates/blogPosts.js'),
    context: {
      breadcrumb: {
        title: 'Blogg',
        path: '/blogg/'
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
  await createEvent(graphql, actions, reporter);
  await createArticlePage(graphql, actions, reporter);
  await createFormPage(graphql, actions, reporter);
  await createBlogPostPage(graphql, actions, reporter);
  await createJobListPage(actions, reporter);
  await createEventListPage(actions, reporter);
  await createNewsletterPage(actions, reporter);
  await createServicesPage(actions, reporter);
  await createServicePages(graphql, actions, reporter)
  await createBlogPostsPage(actions, reporter);
  await createCasesPage(graphql, actions, reporter);
  await createCasesListingPage(actions, reporter);
  await createOfficesPage(actions, reporter);
  await createBergenPage(actions, reporter);
  await createOfficePages(graphql, actions, reporter);
};
