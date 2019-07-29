export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'offices',
      type: 'array',
      title: 'Offices',
      of: [
        {
          type: 'reference',
          to: {
            type: 'office'
          }
        }
      ]
    },
    {
      name: 'pitch',
      title: 'Pitch',
      type: 'pitch'
    }
  ]
};
