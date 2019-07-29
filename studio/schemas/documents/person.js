const aboutFields = [
  {
    name: 'icanhelpyouwith',
    title: 'I can help you with…'
  },
  {
    name: 'onANormalDay',
    title: 'On a typical day…'
  },
  {
    name: 'interests',
    title: 'Am really into'
  },
  {
    name: 'pleasedWith',
    title: 'Am really pleased when'
  },
  {
    name: 'cantWorkWithout',
    title: "Can't work without"
  },
  {
    name: 'myStrength',
    title: 'My strengths'
  },
  {
    name: 'threeWords',
    title: 'Me in three words'
  }
];

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
      type: 'object',
      fields: aboutFields.map(({ name, title }) => ({
        name,
        title,
        type: 'string'
      }))
    },

    {
      type: 'object',
      name: 'socialMedia',
      title: 'Social Media',
      fields: [
        {
          name: 'twitter',
          type: 'string',
          title: 'Twitter'
        },
        {
          name: 'linkedin',
          type: 'string',
          title: 'Linkedin'
        },
        {
          name: 'medium',
          type: 'string',
          title: 'Medium'
        },
        {
          name: 'portfolio',
          type: 'string',
          title: 'Portfolio'
        },
        {
          name: 'articles',
          type: 'array',
          title: 'Articles',
          of: [
            {
              type: 'object',
              fields: [
                { type: 'string', name: 'title', title: 'Title' },
                { type: 'string', name: 'url', title: 'URL' }
              ]
            }
          ]
        }
      ]
    }
  ]
};
