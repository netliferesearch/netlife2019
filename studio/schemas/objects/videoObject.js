export default {
  name: 'videoObject',
  type: 'object',
  title: 'Video object',
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
