import { toPlainText } from '../../../web/src/lib/helpers';

export default {
  name: 'richTextX4',
  title: 'Rich Text (4x blocks of text)',
  type: 'object',
  fields: [
    {
      name: 'textContent',
      type: 'array',
      of: [
        {
          type: 'richTextSection',
        }
      ]
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
