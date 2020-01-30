export default {
  name: 'colorPaletteBlocks',
  type: 'object',
  title: 'Colour palette blocks',
  fields: [
    {
      type: 'array',
      name: 'blocks',
      title: 'Colour palette',
      // Can't have 2 members of same type in sanity array. This is a duplicate of colorBlock.
      of: [{ type: 'colorPaletteBlock'}],
    },
  ],
  preview: {
    select: {
      title: 'colorPaletteBlock.title'
    }
  }
};
