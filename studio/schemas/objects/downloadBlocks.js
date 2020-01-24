export default {
  name: 'downloadBlocks',
  type: 'object',
  title: 'Download blocks',
  fields: [
    {
      type: 'array',
      name: 'blocks',
      title: 'Download block',
      // Can't have 2 members of same type in sanity array. This is a duplicate of colorBlock.
      of: [{ type: 'downloadBlock'}],
    },
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
};
