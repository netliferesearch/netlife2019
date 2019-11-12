export default {
  name: 'imageObject',
  type: 'object',
  title: 'Image Object',
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
      name: 'aspectRatio',
      type: 'string',
      title: 'Aspect Ratio',
      description: 'Default is 3:2',
      options: {
        list: ['3:2', '1:1', '2:1', 'No cropping'],
        layout: 'radio'
      }
    }
  ]
};
