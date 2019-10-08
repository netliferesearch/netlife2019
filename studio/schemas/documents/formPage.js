export default {
  name: 'formPage',
  type: 'document',
  title: 'Form Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      },
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
      name: 'text',
      type: 'richText',
      title: 'Text',
      validation: Rule => Rule.required()
    },
    {
      name: 'form',
      type: 'form',
      title: 'Form'
    }
  ]
};
