export default {
  name: 'eventListing',
  type: 'document',
  title: 'Event Listing',
  __experimental_actions: ['update', 'publish'],
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
      name: 'events',
      title: 'Active events',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'event' }]
        }
      ]
    },
    {
      name: 'additionalContent',
      title: 'Additional Content',
      type: 'array',
      of: [
        { type: 'textImage' },
        { type: 'customEvent' },
        { type: 'contactSection' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
};
