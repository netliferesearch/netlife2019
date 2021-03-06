import { toPlainText } from '../../../web/src/lib/helpers';

export default {
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      description: 'Optional heading rendered with H1 style.'
    },
    {
      name: 'textContent',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Italics', value: 'italics' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' }
          ],
          lists: [
            { title: 'Numbered', value: 'number' },
            { title: 'Bullet', value: 'bullet' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Italics', value: 'em' }
            ]
          },
          of: [{ type: 'link' }]
        },
        { type: 'articleImage' },
        { type: 'codeBlock' },
        { type: 'video' },
      ]
    },
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
