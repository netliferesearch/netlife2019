export default {
  name: 'blogOverview',
  type: 'document',
  title: 'Blog Overview',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      options: {
        collapsable: true
      }
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro'
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'Search Engine Optimization',
      options: {
        collapsible: true
      }
    }
  ]
};
