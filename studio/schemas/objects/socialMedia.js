export default {
  type: 'object',
  name: 'socialMedia',
  title: 'Social Media',
  fields: [
    {
      name: 'twitter',
      type: 'string',
      title: 'Twitter'
    },
    {
      name: 'linkedin',
      type: 'string',
      title: 'Linkedin'
    },
    {
      name: 'medium',
      type: 'string',
      title: 'Medium'
    },
    {
      name: 'portfolio',
      type: 'string',
      title: 'Portfolio'
    },
    {
      name: 'articles',
      type: 'array',
      title: 'Articles',
      of: [{ type: 'link' }]
    }
  ]
};
