export default {
  name: 'link',
  type: 'object',
  fields: [
    { type: 'string', name: 'title', title: 'Title' },
    { type: 'string', name: 'text', title: 'Text' },
    { type: 'string', name: 'url', title: 'URL' },
    {
      type: 'boolean',
      name: 'internalLink',
      title: 'Internal Link',
      description: 'Uses the reference field instead of the URL field.'
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
