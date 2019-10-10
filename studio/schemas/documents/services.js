export default {
  name: 'ourServices',
  type: 'document',
  title: 'Services',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: Rule => Rule.required()
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
        { type: 'richText' }
      ]
    },
    {
      name: 'featuredCases',
      type: 'array',
      title: 'Featured cases',
      description: 'Link to one or more Netlife cases.',
      of: [{ type: 'reference', to: [{ type: 'cases' }] }],
      options: {
        layout: 'tags'
      }
    }
  ],
  preview: {
    select: {
      title: 'heading',
    }
  }
};
