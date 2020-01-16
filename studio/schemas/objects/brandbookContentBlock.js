export default {
  name: 'brandbookContentBlock',
  type: 'object',
  title: 'Brandbook content block',
  fields: [
    {
      name: 'image',
      type: 'articleImage'
    },
    {
      name: 'linkToBrandbookPage',
      type: 'reference',
      title: 'Link',
      description: 'Link to brandbook page',
      to: [{ type: 'brandbookPage' }],
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'linkToBrandbookPage.title'
    }
  }
};
