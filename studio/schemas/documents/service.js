import standardSlugify from 'standard-slugify';

const PARENT_PATH = 'tjenester';

export default {
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Max: 96 Characters',
      validation: Rule => Rule.required().max(96)
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: doc => `${PARENT_PATH}/${doc.title}`,
        slugify: input =>
          standardSlugify(input, {
            keepCase: false,
            replacements: {
              '/': '/'
            }
          }),
        maxLength: 120
      }
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'Search Engine Optimization',
      options: {
        collapsible: true
      }
    },
    {
      name: 'additionalContent',
      title: 'Additional Content',
      type: 'textImage'
    },
    {
      name: 'featuredTitle',
      type: 'string',
      title: 'Featured cases title',
      description: 'Max: 96 Characters',
      validation: Rule => Rule.required().max(96)
    },
  ]
};
