export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug'
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
      name: 'offices',
      type: 'array',
      title: 'Offices',
      of: [
        {
          type: 'reference',
          to: {
            type: 'office'
          }
        }
      ]
    },
    {
      name: 'additionalContent',
      type: 'textImage',
      title: 'Additional content',
      options: {
        collapsible: true
      }
    }
  ]
};
