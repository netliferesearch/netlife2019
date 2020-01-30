export default {
  name: 'downloadBlock',
  type: 'object',
  title: 'Download file',
  fields: [
    {
      type: 'string',
      name: 'description',
      title: 'Description'
    },
    {
      name: 'linkTo',
      type: 'url',
      title: 'Link to downloads'
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Link text'
    }
  ]
};
