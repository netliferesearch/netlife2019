export default {
  name: 'jobAdvertListing',
  type: 'document',
  title: 'Job Advert Listing',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
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
