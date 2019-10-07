export default {
  name: 'jobAdvertListing',
  type: 'document',
  title: 'Job Advert Listing',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug'
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      options: {
        collapsable: true
      }
    },
    {
      name: 'jobAdverts',
      title: 'Active Job Adverts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'jobAdvert' }]
        }
      ]
    },
    {
      name: 'additionalContent',
      title: 'Additional Content',
      type: 'array',
      of: [
        { type: 'textImage' },
        {
          type: 'contactSection'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
};
