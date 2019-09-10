export default {
  title: 'Advanced Link',
  name: 'link',
  type: 'object',
  fields: [
    { type: 'string', name: 'text', title: 'Text' },
    {
      type: 'url',
      name: 'url',
      title: 'URL',
      description: 'URL to an external page or specific path'
    },
    {
      type: 'boolean',
      name: 'nofollow',
      title: 'No Follow',
      description: 'For SEO. Makes search engines ignore this path.'
    },
    {
      type: 'reference',
      title: 'Internal page',
      name: 'internalPage',
      description: 'This will override the URL',
      to: [
        { type: 'article' },
        { type: 'office' },
        { type: 'contact' },
        { type: 'person' },
        { type: 'jobAdvert' },
        { type: 'jobAdvertListing' },
        { type: 'newsletter' },
        { type: 'blogPost' }
      ]
    }
  ]
};
