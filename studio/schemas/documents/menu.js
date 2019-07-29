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
      name: 'Navigation',
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
