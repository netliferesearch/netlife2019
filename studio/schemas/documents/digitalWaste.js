export default {
  name: 'digitalWaste',
  type: 'document',
  title: 'Digital Waste',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Heading',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      name: 'intro',
      type: 'text',
      title: 'Intro'
    },
    {
      name: 'videoId',
      title: 'Video URL/ID',
      type: 'string'
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
          type: 'textImage'
        },
        {
          type: 'textImageScroll'
        },
        {
          type: 'articleImage'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
};
