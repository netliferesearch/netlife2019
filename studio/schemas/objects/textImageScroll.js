import { toPlainText } from '../../../web/src/lib/helpers';

export default {
  name: 'textImageScroll',
  type: 'object',
  title: 'Text Image Scroll',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'imageObject' }]
    },
    {
      name: 'textContent',
      title: 'Text Content',
      type: 'bodyPortableText',
      validation: Rule => Rule.required()
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
