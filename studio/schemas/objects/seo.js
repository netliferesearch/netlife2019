export default {
  name: 'seo',
  type: 'object',
  fields: [
    {
      name: 'seoTitle',
      title: 'SEO Title',
      description: "Used to override this document's title for SEO",
      type: 'string'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'The text under the page title in the Google result',
      validation: Rule =>
        Rule.required()
          .min(10)
          .max(160)
    },
    {
      name: 'indexing',
      title: 'Indexing',
      type: 'string',
      description: 'Default: index + nofollow',
      options: {
        list: ['noindex + follow', 'index + nofollow'],
        layout: 'radio'
      }
    },
    {
      name: 'canonical',
      title: 'Canonical',
      description: 'Default: its own URL (if empty)',
      type: 'url'
    }
  ]
};
