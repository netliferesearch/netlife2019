export default {
  name: 'newsletter',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro'
    },
    {
      name: 'termsConditions',
      type: 'array',
      title: 'Terms and conditions',
      description: 'The label for the checkbox',
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            {
              title: 'Normal',
              value: 'normal'
            }
          ],
          lists: [],
          marks: {
            decorators: []
          }
        }
      ]
    },
    {
      name: 'aditionalInfo',
      type: 'text',
      title: 'Aditional information'
    }
  ]
};
