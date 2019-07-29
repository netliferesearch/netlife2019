const path = require('path');

module.exports = {
  extends: ['react-app'],
  parser: 'babel-eslint',
  settings: {
    react: {
      pragma: 'React',
      version: '16.2.0'
    }
  }
};
