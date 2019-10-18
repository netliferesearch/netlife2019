// todo
import standardSlugify from 'standard-slugify';

const PARENT_PATH = 'event';

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      title: 'SEO',
      type: 'seo',
      options: {
        collapsible: true
      }
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'eventStart',
      title: 'Event start',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'eventEnd',
      title: 'Event end',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'eventLink',
      title: 'Event link',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      name: 'office',
      title: 'Office',
      type: 'reference',
      to: [{ type: 'office' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'text',
      type: 'array',
      title: 'Text',
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' }
          ],
          lists: [
            { title: 'Numbered', value: 'number' },
            { title: 'Bullet', value: 'bullet' }
          ],
          marks: {
            decorators: [{ title: 'Strong', value: 'strong' }]
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'linkedPersons',
      type: 'array',
      title: 'Speakers',
      description: 'Link to one or more Netlife persons as speakers.',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      options: {
        layout: 'tags'
      }
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
};
