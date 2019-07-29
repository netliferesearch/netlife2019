const aboutFields = [
  {
    name: 'icanhelpyouwith',
    title: 'I can help you with…'
  },
  {
    name: 'onANormalDay',
    title: 'On a typical day…'
  },
  {
    name: 'interests',
    title: 'Am really into'
  },
  {
    name: 'pleasedWith',
    title: 'Am really pleased when'
  },
  {
    name: 'cantWorkWithout',
    title: "Can't work without"
  },
  {
    name: 'myStrength',
    title: 'My strengths'
  },
  {
    name: 'threeWords',
    title: 'Me in three words'
  }
];

export default {
  name: 'aboutPerson',
  type: 'object',
  fields: aboutFields.map(({ name, title }) => ({
    name,
    title,
    type: 'string'
  }))
};
