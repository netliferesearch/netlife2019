export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe the site for search engines and social media.'
    },
    {
      name: 'notFoundMessage',
      title: 'Not found message (404 page)',
      type: 'richText'
    }
  ]
};
