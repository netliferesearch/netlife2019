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
      name: 'caseOrder',
      title: 'Case Order',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'cases' }] },
      ],
      validation: Rule => Rule.unique()
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
      name: 'additionalContent',
      title: 'Additional Content',
      type: 'array',
      of: [
        { type: 'textImage' },
        { type: 'customEvent' },
        { type: 'contactSection' }
      ]
    }
  ]
};
