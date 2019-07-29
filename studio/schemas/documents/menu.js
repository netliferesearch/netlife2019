export default {
  name: 'menu',
  type: 'document',
  title: 'Contact us',
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
