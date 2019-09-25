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
      validation: Rule => Rule.required()
    }
  ]
};
