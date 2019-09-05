export default {
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Max: 100 Characters',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 100
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
      name: 'publishDate',
      type: 'date',
      title: 'Publish Date'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'person' }]
    },
    {
      name: 'mainImage',
      type: 'imageObject',
      title: 'Main Image'
    },
    {
      name: 'article',
      type: 'richText',
      title: 'Article'
    },
    {
      name: 'serviceCategories',
      type: 'array',
      title: 'Service Categories',
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
