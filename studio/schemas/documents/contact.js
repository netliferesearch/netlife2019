export default {
  name: 'contact',
  type: 'document',
  title: 'Contact us',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
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
