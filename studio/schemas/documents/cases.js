import standardSlugify from 'standard-slugify';

const PARENT_PATH = 'referanser';

export default {
  name: 'cases',
  type: 'document',
  title: 'Case',
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
      name: 'intro',
      type: 'richText',
      title: 'Intro'
    },
    {
      name: 'mainImage',
      type: 'imageObject',
      title: 'Main Image'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'richText'
        },
        {
          type: 'richTextLeft'
        },
        {
          type: 'textImage'
        },
        {
          type: 'imageObject'
        },
        {
          type: 'videoObject'
        },
        {
          type: 'imageX2'
        },
      ]
    },
    {
      name: 'results',
      title: 'Results',
      type: 'resultsBlock',
      options: {
        collapsible: true
      }
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'quoteBlock',
      options: {
        collapsible: true
      }
    },
    {
      name: 'caseColor',
      type: 'string',
      title: 'Case background color in hex',
      description: '6 Characters example: FFFFFF',
      validation: Rule => Rule.required().min(6).max(6)
    },
    {
      name: 'serviceCategories',
      type: 'array',
      title: 'Service Categories',
      description: 'Link to one or more Netlife services.',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'contactPersonsBlock',
      title: 'Contact us section persons',
      type: 'contactPersonsBlock',
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage.image'
    }
  }
};
