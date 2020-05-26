export default {
  name: 'casesListing',
  type: 'document',
  title: 'Cases Listing',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug'
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro',
      description: 'Også kjent som ingress på norsk.'
    },
    {
      title: 'Searchbar module',
      name: 'searchbar',
      description: 'Default is off',
      type: 'string',
      options: {
        list: [
          {title: 'On', value: 'on'},
          {title: 'Off', value: 'off'}
        ],
        layout: 'radio'
      }
    },
    {
      title: 'Category filter module',
      name: 'categoryFilter',
      description: 'Default is off',
      type: 'string',
      options: {
        list: [
          {title: 'On', value: 'on'},
          {title: 'Off', value: 'off'}
        ],
        layout: 'radio'
      }
    },
    {
      name: 'caseOrder',
      title: 'Case Order',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'cases' }] },
      ],
      validation: Rule => Rule.unique()
    },
    {
      name: 'additionalContent',
      title: 'Additional Content',
      type: 'array',
      of: [
        { type: 'textImage' },
        { type: 'customEvent' }
      ]
    },
    {
      name: 'contactPersonsBlock',
      title: 'Contact us section',
      type: 'contactPersonsBlock',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      options: {
        collapsable: true
      }
    }
  ]
};
