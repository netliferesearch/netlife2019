export default {
  name: 'formFieldSelection',
  type: 'object',
  title: 'Form Field Selection',
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
            title: 'Radio',
            value: 'radio'
          },
          {
            title: 'Checkbox',
            value: 'checkbox'
          },
          {
            title: 'Select',
            value: 'select'
          }
        ]
      }
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'string' }]
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
