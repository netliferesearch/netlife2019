export default {
  name: 'ourServices',
  type: 'document',
  title: 'Services',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro',
      description: 'Også kjent som ingress på norsk.'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'richText'  },
        { type: 'richTextX4'  },
        { type: 'imageObject' },
      ]
    },
    {
      name: 'additionalContent',
      title: 'Additional Content',
      type: 'array',
      of: [
        { type: 'textImage' },
        { type: 'customEvent' },
        { type: 'contactSection' }
      ]
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      options: {
        collapsable: true
      }
    },
  ],
  preview: {
    select: {
      title: 'heading',
    }
  }
};
 