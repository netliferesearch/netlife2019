import standardSlugify from 'standard-slugify';

const PARENT_PATH = 'kontakt';

export default {
  name: 'office',
  type: 'document',
  title: 'Office',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: doc => `${PARENT_PATH}/${doc.name}`,
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
      title: 'SEO',
      type: 'seo',
      options: {
        collapsible: true
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'officeInfo',
      type: 'array',
      title: 'Office information',
      description: 'Intro, contact info, address, orgnr. and social networks.',
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            {
              title: 'Normal',
              value: 'normal'
            }
          ],
          lists: [],
          marks: {
            decorators: []
          },
          of: [{ type: 'link' }]
        }
      ]
    },
    {
      name: 'officeArticle',
      type: 'array',
      title: 'Office Article',
      description: 'The page you view when visiting the office page.',
      of: [
        {
          title: 'Rich text',
          type: 'richText'
        },
        {
          title: 'Image',
          type: 'imageObject'
        },
        {
          title: 'Text Image',
          type: 'textImage'
        }
      ]
    },
    {
      name: 'contactSection',
      type: 'contactSection',
      title: 'Contact Section'
    }
  ]
};
