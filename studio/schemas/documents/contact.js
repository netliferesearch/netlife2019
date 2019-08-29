export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  __experimental_actions: ['update', 'publish'],
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
      name: 'additionalContent',
      type: 'textImage',
      title: 'Additional content',
      options: {
        collapsible: true
      }
    }
  ]
};
