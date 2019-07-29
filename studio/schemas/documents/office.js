export default {
  name: 'office',
  type: 'document',
  title: 'Office',
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
      name: 'officeInfo',
      type: 'array',
      title: 'Office information',
      description: 'Intro, contact info, address, orgnr. and social networks.',
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
    }
  ]
};
