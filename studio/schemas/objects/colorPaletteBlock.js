export default {
  name: 'colorPaletteBlock',
  type: 'object',
  title: 'Colour palette block',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      type: 'string',
      name: 'colorHex',
      title: 'HEX',
      validation: Rule => Rule.required()
    },
    {
      type: 'string',
      name: 'colorVariable',
      title: 'Variable name'
    },
    {
      type: 'string',
      name: 'colorRgb',
      title: 'RGB'
    },
    {
      type: 'string',
      name: 'colorCmykC',
      title: 'CMYK C'
    },
    {
      type: 'string',
      name: 'colorCmykU',
      title: 'CMYK U'
    },
    {
      type: 'string',
      name: 'colorPantone',
      title: 'Pantone'
    },
  ],
};
