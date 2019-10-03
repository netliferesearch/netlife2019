export default {
  name: 'newsletter',
  type: 'document',
  title: 'Newsletter',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug'
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
