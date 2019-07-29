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
      title: 'Image',
      options: {
        hotspot: true
      }
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
