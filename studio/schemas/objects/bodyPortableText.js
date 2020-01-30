export default {
  name: 'bodyPortableText',
  type: 'array',
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
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ]
      }
    }
  ]
};
