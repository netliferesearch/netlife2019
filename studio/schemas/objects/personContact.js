export default {
  name: 'personContact',
  type: 'object',
  title: 'Person Contact',
  fields: [
    {
      name: 'title',
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
      ]
    }
  ]
};
