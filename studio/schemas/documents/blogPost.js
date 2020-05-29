import standardSlugify from 'standard-slugify';

const PARENT_PATH = 'blogg';

export default {
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
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
      name: 'intro',
      type: 'text',
      title: 'Intro',
      description: 'Også kjent som ingress på norsk.'
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
      name: 'publishDate',
      type: 'date',
      title: 'Publish Date'
    },
    {
      name: 'author',
      title: 'Author',
      description: 'Select one or multiple authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'person' }]
        }
      ]
    },
    {
      name: 'mainImage',
      type: 'imageObject',
      title: 'Main Image'
    },
    {
      name: 'mainImageText',
      type: 'string',
      title: 'Main Image Text',
      description: 'i.e. credit to photographer'
    },
    {
      name: 'article',
      type: 'richText',
      title: 'Article'
    },
    {
      name: 'contactTitle',
      type: 'string',
      title: 'Contact Title'
    },
    {
      name: 'serviceCategories',
      type: 'array',
      title: 'Service(s)',
      description: 'Used to direct the user to the about us pages.',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      options: {
        layout: 'tags'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishDate',
      media: 'mainImage.image'
    }
  }
};
