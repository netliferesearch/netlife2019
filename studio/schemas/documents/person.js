export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Use the format "Firstname Lastname'
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
      }
    },
    {
      type: 'reference',
      title: 'Office',
      name: 'office',
      to: {
        type: 'office'
      }
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number',
      description: 'Eight digits, leave the formating to us.'
    },
    {
      name: 'roles',
      type: 'array',
      title: 'Roles',
      of: [{ type: 'string' }]
    },
    {
      name: 'services',
      type: 'array',
      title: 'Services',
      of: [{ type: 'string' }]
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
