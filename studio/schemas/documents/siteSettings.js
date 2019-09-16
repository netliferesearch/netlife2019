export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'notFoundMessage',
      title: 'Not found message (404 page)',
      type: 'richText'
    },
    {
      name: 'homePageSeo',
      title: 'Home Page SEO',
      type: 'seo',
      options: {
        collapsable: true
      }
    }
  ]
};
