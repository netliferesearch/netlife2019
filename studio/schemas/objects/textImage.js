export default {
  name: 'textImage',
  type: 'object',
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
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.required()
    },
    {
      name: 'imageLeft',
      type: 'boolean',
      title: 'Image left',
      description:
        'Places the image on the left and text on the right. Default (off) is the opposite.'
    },
    {
      name: 'textContent',
      title: 'Text Content',
      type: 'bodyPortableText',
      validation: Rule => Rule.required()
    }
  ],
  options: {
    collapsible: true
  }
};
