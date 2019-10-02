export default {
  title: 'Mux videos',
  name: 'videoMux',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
    },
  ]
};
