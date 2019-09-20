export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'name',
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
      type: 'richText',
      title: 'Intro'
    },
    {
      name: 'vimeoId',
      type: 'string',
      title: 'Video ID',
      description: 'Just the ID, not the whole URL'
    },
    {
      name: 'aboutDesign',
      type: 'richText',
      title: 'About Netlife Design',
      validation: Rule => Rule.required()
    },
    {
      name: 'aboutDialog',
      type: 'richText',
      title: 'About Netlife Dialog',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
};
