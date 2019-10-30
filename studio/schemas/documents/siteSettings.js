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
      name: 'description',
      type: 'text',
      title: 'Default description',
      description:
        'The description used on the front page and as a default fallback.'
    },
    {
      name: 'gatsbyPreviewUrl',
      type: 'string',
      title: 'Gatsby Preview URL'
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
    },
    {
      name: 'contactBlock',
      title: 'Contact us section',
      type: 'contactSection',
    }
  ]
};
