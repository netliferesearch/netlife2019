import standardSlugify from 'standard-slugify';

const PARENT_PATH = 'merkevarehandbok';

export default {
  name: 'brandbookPage',
  type: 'document',
  title: 'Brandbook Page',
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
        source: doc => `${PARENT_PATH}/${doc.title}/`,
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
      name: 'introTitle',
      type: 'string',
      title: 'Intro title',
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro'
    },
  ]
};
