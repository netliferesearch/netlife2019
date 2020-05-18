import standardSlugify from 'standard-slugify';

const PARENT_PATH = 'arbeider';

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
      name:'previewStyle',
      type: 'string',
      title: 'Preview Style',
      description: 'This is used to determine the preview style in the list view of cases. Default is Image Left',
      options: {
        list: [
          {title: 'Image Left', value: 'image-left'},
          {title: 'Image Right', value: 'image-right'},
          {title: 'Image Full', value: 'image-full'},
          {title: 'Image Card', value: 'image-card'},
        ],
        layout: 'radio'
      }
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
          type: 'richTextSection'
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
        { 
          type: 'quoteBlock'
        },
        {
          type: 'resultsBlock'
        },
      ]
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
