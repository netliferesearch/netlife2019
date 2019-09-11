export default {
  name: 'people',
  type: 'document',
  title: 'People',
  __experimental_actions: ['update', 'publish'],
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
    }
  ]
};
