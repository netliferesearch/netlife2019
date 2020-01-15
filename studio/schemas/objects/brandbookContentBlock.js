export default {
  name: 'brandbookContentBlock',
  type: 'object',
  title: 'Brandbook content block',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
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
