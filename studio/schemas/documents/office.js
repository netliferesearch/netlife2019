export default {
  name: 'contact',
  type: 'document',
  title: 'Contact us',
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
    },
    {
      name: 'contactInformation',
      type: 'text',
      title: 'Contact information'
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
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
};
