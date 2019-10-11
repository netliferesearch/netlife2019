import { configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import '@/styles/style.css'
import '../src/styles/main.css';
import '../src/styles/syntaxHighlighter.css';
import '../src/styles/typography.css';

/*function loadStories() {
  // automatically import all files ending in *.stories.js
  const files = [];
  const req = require.context('../src', true, /\.stories\.js$/);
  console.log(req.keys());
  req.keys().forEach(filename => files.push(req(filename)));
  console.log(files);
  return files;
}*/
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};
// configure(loadStories, module);

configure(require.context('../src', true, /\.stories\.js$/), module);
