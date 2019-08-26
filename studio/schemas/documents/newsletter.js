export default {
  name: 'newsletter',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'intro',
      type: 'text',
      title: 'Intro'
    },
    {
      name: 'info',
      type: 'text',
      title: 'Info'
    },
    {
      name: 'consentText',
      type: 'string',
      title: 'Consent text'
    }
  ]
};
