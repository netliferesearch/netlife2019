export default {
  name: 'resultsBlock',
  type: 'object',
  title: 'Results block',
  fields: [
    {
      type: 'string',
      name: 'resultsHeading',
      title: 'Title'
    },
    {
      type: 'text',
      name: 'resultsIntro',
      title: 'Intro'
    },
    {
      type: 'array',
      name: 'resultColumns',
      title: 'Columns',
      type: 'array',
      validation: Rule => Rule.max(3),
      of: [
        {
          type: 'resultColumn'
        }
      ]
    }
  ],
};
