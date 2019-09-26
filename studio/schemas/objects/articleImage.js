export default {
  name: 'articleImage',
  type: 'object',
  title: 'Article Image',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule =>
        Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'largeImage',
      type: 'boolean',
      title: 'Large Image',
      description: 'Should the image span outside its parent text container'
    },
    {
      name: 'aspectRatio',
      type: 'string',
      title: 'Aspect Ratio',
      description: 'Default is 3:2',
      options: {
        list: [{ title: '3:2', value: '3:2' }, { title: '1:1', value: '1:1' }]
      }
    }
  ]
};
