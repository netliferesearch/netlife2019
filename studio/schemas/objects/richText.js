import { toPlainText } from '../../../web/src/lib/helpers';

export default {
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  fields: [
    {
      name: 'textContent',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' }
          ],
          lists: [
            { title: 'Numbered', value: 'number' },
            { title: 'Bullet', value: 'bullet' }
          ],
          marks: {
            decorators: [{ title: 'Strong', value: 'strong' }]
          },
          of: [
            { type: 'link' },
            { type: 'articleImage' },
            { type: 'codeBlock' },
            { type: 'video' },
            { type: 'blockquote' }
          ]
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
