export default {
  name: 'colorBlocks',
  type: 'object',
  title: 'Section of colour block text',
  fields: [
    {
      type: 'array',
      name: 'blocks',
      title: 'Colour blocks with text',
      // Can't have 2 members of same type in sanity array. This is a duplicate of colorBlock.
      of: [{ type: 'colorBlockInBlocks'}],
    },
  ],
  preview: {
    select: {
      title: 'colorBlocks.blocks.title'
    }
  }
};
