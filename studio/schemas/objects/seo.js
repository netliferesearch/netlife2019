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
        Rule.custom(val =>
          val ? val.length <= 160 || 'Max 160 characters' : true
        )
    },
    {
      name: 'indexing',
      title: 'Indexing',
      type: 'string',
      description: 'Default: Search engines should index the page',
      options: {
        list: [
          'Page should index (index + follow)',
          'Page should NOT index (noindex + follow)',
          'Page should index but NOT follow external links (index + nofollow)'
        ],
        layout: 'dropdown'
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
