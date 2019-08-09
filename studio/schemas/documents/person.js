export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Use the format "Firstname Lastname',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Used in the url. Eg. Fredrik Schjold becomes /fredrik-schjold. For conflicting names; use postfix dash number. Eg. /fredrik-schjold-2',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      type: 'reference',
      title: 'Office',
      name: 'office',
      to: {
        type: 'office'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: Rule => Rule.required()
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number',
      description: 'Eight digits, leave the formating to us.',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role'
    },
    {
      name: 'services',
      type: 'array',
      title: 'Services',
      of: [{ type: 'reference', to: { type: 'personService' } }],
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(2)
    },
    {
      name: 'about',
      type: 'aboutPerson'
    },
    {
      name: 'socialMedia',
      type: 'socialMedia'
    }
  ]
};
