export default {
  name: 'contactSection',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'contactIntro',
      type: 'bodyPortableText',
      title: 'Additional intro text',
    },
    {
      name: 'persons',
      title: 'Persons',
      description: '1 or 2 persons',
      type: 'array',
      validation: Rule => Rule.max(2).warning('Max limit: 2 persons'),
      of: [
        {
          type: 'reference',

          to: [
            {
              type: 'person'
            }
          ]
        }
      ]
    },
    {
      name: 'form',
      type: 'form',
      title: 'Additional form'
    }
  ]
};
