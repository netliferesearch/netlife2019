export default {
  name: 'article',
  type: 'document',
  title: 'Article',
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
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
};
