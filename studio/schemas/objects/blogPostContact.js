export default {
  name: 'blogPostContact',
  type: 'object',
  title: 'Blog Post Contact',
  fields: [
    {
      name: 'contactTitle',
      type: 'string',
      title: 'Contact Title'
    },
    {
      name: 'contactPerson',
      title: 'Contact Person(s)',
      description: 'Select one or multiple people',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'person' }]
        }
      ]
    }
  ]
};
