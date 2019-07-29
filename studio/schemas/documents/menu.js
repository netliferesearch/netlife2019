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
      name: 'offices',
      type: 'array',
      title: 'Offices',
      of: [
        {
          type: 'url'
        }
      ]
    }
  ]
};
