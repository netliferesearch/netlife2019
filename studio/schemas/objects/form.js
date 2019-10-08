export default {
  name: 'form',
  type: 'object',
  title: 'Form',
  fields: [
    {
      type: 'array',
      name: 'formFields',
      title: 'Form Fields',
      of: [{ type: 'formFieldSelection' }, { type: 'formFieldText' }]
    },
    {
      type: 'string',
      name: 'submitButtonText',
      title: 'Submit Button Text'
    }
  ]
};
