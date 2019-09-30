export default {
  name: 'codeBlock',
  type: 'object',
  title: 'Code Block',
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'language',
      type: 'string',
      title: 'Language',
      description: 'Highlights the code automatically.',
      options: {
        list: [
          'javascript',
          'typescript',
          'php',
          'xml',
          'css',
          'scss',
          'json',
          'java',
          'yaml',
          'plaintext',
          'cs'
        ],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'code'
    }
  }
};
