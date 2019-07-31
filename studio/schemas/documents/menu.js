export default {
  name: 'menu',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        {
          type: 'link'
        }
      ]
    }
  ]
};
