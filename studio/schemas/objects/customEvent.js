export default {
  name: 'customEvent',
  title: 'Custom Event',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
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
      validation: Rule =>
        Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'imageText',
      type: 'string',
      title: 'Image text',
      description: 'i.e. credit to photographer'
    },
    {
      name: 'imageLeft',
      type: 'boolean',
      title: 'Image left',
      description:
        'Places the image on the left and text on the right. Default (off) is the opposite.'
    },
    {
      name: 'isHalf',
      type: 'boolean',
      title: 'Content is 50%-50%',
      description:
        'If the content should be half-half. Default (on) is set at the component level. To set this to off, switch it on and then off.'
    },
    {
      name: 'aspectRatio',
      type: 'string',
      title: 'Aspect Ratio',
      description: 'Default is 3:2',
      options: {
        list: ['3:2', '1:1', '2:1', 'No cropping'],
        layout: 'radio'
      }
    },
    {
      name: 'text',
      type: 'array',
      title: 'Text',
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' }
          ],
          lists: [
            { title: 'Numbered', value: 'number' },
            { title: 'Bullet', value: 'bullet' }
          ],
          marks: {
            decorators: [{ title: 'Strong', value: 'strong' }]
          }
        }
      ],
      validation: Rule => Rule.required()
    },
  ]
};
