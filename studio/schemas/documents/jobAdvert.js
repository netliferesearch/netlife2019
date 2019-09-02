export default {
  name: 'jobAdvert',
  title: 'Job Advert',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
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
      name: 'deadline',
      title: 'Deadline',
      type: 'date',
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
            { title: 'H1', value: 'h1' },
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
      name: 'outroImage',
      title: 'Outro image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'deadline'
    }
  }
};
