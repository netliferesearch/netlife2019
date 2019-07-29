export default {
  name: 'pitch',
  type: 'object',
  title: 'Pitch',
  description:
    'Directs the user to a relevant page near the bottom of the page',
  fields: [
    {
      name: 'pitchText',
      type: 'array',
      title: 'Pitch text',
      description: 'Remember to add a link',
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            {
              title: 'Normal',
              value: 'normal'
            }
          ],
          lists: [],
          marks: {
            decorators: []
          }
        }
      ]
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    }
  ]
};
