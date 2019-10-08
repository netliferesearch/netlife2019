export default {
  name: 'formFieldText',
  type: 'object',
  title: 'Form Field Text',
  fields: [
    {
      type: 'string',
      name: 'label',
      title: 'Label'
    },
    {
      type: 'string',
      name: 'type',
      title: 'Type',
      options: {
        list: [
          {
            title: 'Text String',
            value: 'string'
          },
          {
            title: 'Text Area',
            value: 'textarea'
          },
          {
            title: 'Email',
            value: 'email'
          },
          {
            title: 'Number',
            value: 'tel'
          }
        ]
      }
    },
    {
      type: 'boolean',
      name: 'required',
      title: 'Requried'
    },
    {
      type: 'string',
      name: 'description',
      title: 'Description'
    },
    {
      type: 'string',
      name: 'errorMessage',
      title: 'Error Message'
    }
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'type',
      extra: 'required'
    },
    prepare(selection) {
      const { title, subtitle, extra } = selection;
      return {
        title: title,
        subtitle: `${subtitle} ${extra ? '(required)' : ''}`
      };
    }
  }
};
