export default {
  name: 'imageX2',
  type: 'object',
  title: 'Image x 2',
  fields: [
    {
      name: 'imageLeft',
      title: 'Image left',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'altLeft',
      type: 'string',
      title: 'Alternative text (left image)',
      description: 'Important for SEO and accessiblity.'
    },
    {
      name: 'imageRight',
      title: 'Image right',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'altRight',
      type: 'string',
      title: 'Alternative text (right image)',
      description: 'Important for SEO and accessiblity.'
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
  ],
};
