import { toPlainText } from '../../../web/src/lib/helpers';

export default {
  name: 'textImage',
  type: 'object',
  title: 'Text Image',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'REQUIRED'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
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
    },
    {
      name: 'imageLeft',
      type: 'boolean',
      title: 'Image left',
      description:
        'Places the image on the left and text on the right. Default (off) is the opposite.'
    },
    {
      name: 'textContent',
      title: 'Text Content',
      type: 'bodyPortableText',
      description: 'REQUIRED'
    }
  ],
  preview: {
    select: {
      title: 'textContent'
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: toPlainText(title)
      };
    }
  }
};
