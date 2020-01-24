export default {
  name: 'sectionContent',
  type: 'object',
  title: 'Section content',
  fields: [
    {
      type: 'string',
      name: 'sectionTitle',
      title: 'Section title'
    },
    {
      type: 'array',
      name: 'content',
      title: 'Content',
      of: [
        { type: 'richText' },
        { type: 'richTextLeft' },
        { type: 'textImage' },
        { type: 'imageObject' },
        { type: 'imageX2' },
        { type: 'downloadBlocks' },
        { type: 'colorBlock' },
        { type: 'colorBlocks' },
      ]
    },
  ]
};
