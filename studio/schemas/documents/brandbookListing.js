export default {
  name: 'brandbookListing',
  type: 'document',
  title: 'Brandbook Listing',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
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
      name: 'title',
      type: 'string',
      title: 'Intro title',
      validation: Rule => Rule.required()
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro'
    },
    {
      name: 'brandbookPages',
      type: 'array',
      title: 'Related brandbook pages',
      description: 'Link to one or more brandbook pages.',
      of: [{ type: 'reference', to: [{ type: 'brandbookPage' }] }],
    },
    {
      name: 'brandbookTemplates',
      type: 'array',
      title: 'Templates and downloads',
      description: 'Link to one or more brandbook pages with templates and downloads.',
      of: [{ type: 'reference', to: [{ type: 'brandbookPage' }] }],
    },
    {
      name: 'brandbookContent',
      type: 'array',
      title: 'Brandbook content',
      description: 'Create blocks of brandbook content',
      of: [{
        type: 'brandbookContentBlock'
      }],
    },
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
};
