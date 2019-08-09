export default {
  name: 'personService',
  type: 'document',
  title: 'Person Service',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Used to describe what a person do',
      validation: Rule => Rule.required()
    }
  ]
};
