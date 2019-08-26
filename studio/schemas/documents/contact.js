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
      name: 'textImage',
      type: 'array',
      of: [{ type: 'textImage' }],
      description: 'Used for additional info, or linking to relevant content.',
      validation: Rule => Rule.required().max(1)
    }
  ]
};
