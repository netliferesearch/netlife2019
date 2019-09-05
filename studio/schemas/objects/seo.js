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
      description:
        'The text under the page title in the Google result | Max: 160',
      validation: Rule => Rule.required().max(160)
    },
    {
      name: 'indexing',
      title: 'Indexing',
      type: 'string',
      description: 'Default: Search engines should index the page',
      options: {
        list: [
          {
            title: 'Page should index (index + follow)',
            value: 'index, follow'
          },
          {
            title: 'Page should NOT index (noindex + follow)',
            value: 'noindex, follow'
          },
          {
            title:
              'Page should index but NOT follow external links (index + nofollow)',
            value: 'index, nofollow'
          }
        ],
        layout: 'dropdown'
      }
    },
    {
      name: 'canonical',
      title: 'Canonical',
      description: 'Default: its own URL (if empty)',
      type: 'url'
    },
    {
      name: 'ogTitle',
      title: 'Open Graph Title',
      description: '60 characters',
      type: 'string',
      validation: Rule =>
        Rule.custom(val =>
          val ? val.length <= 60 || 'Max 60 characters' : true
        )
    },
    {
      name: 'twitterTitle',
      title: 'Twitter Title',
      description: 'Optimal: 55 | Max: 95 characters',
      type: 'string',
      validation: Rule =>
        Rule.custom(val =>
          val ? val.length <= 95 || 'Max 95 characters' : true
        )
    },
    {
      name: 'ogDescription',
      title: 'Open Graph Description',
      description: '155 Characters',
      type: 'text',
      validation: Rule =>
        Rule.custom(val =>
          val ? val.length <= 155 || 'Max 155 characters' : true
        )
    },
    {
      name: 'twitterDescription',
      title: 'Twitter Description',
      description: 'Optimal: 55 or shorter | Max: 200 Characters',
      type: 'text',
      validation: Rule =>
        Rule.custom(val =>
          val ? val.length <= 200 || 'Max 200 characters' : true
        )
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'imageObject'
    },
    {
      name: 'twitterImage',
      title: 'Twitter Image',
      type: 'imageObject'
    }
  ]
};
