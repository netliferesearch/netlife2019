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
      name: 'person',
      type: 'reference',
      description: '1 or 2 persons',
      to: [
        {
          type: 'person'
        }
      ],
      validation: Rule => Rule.max(2).warning('Max limit: 2 persons')
    }
  ]
};
