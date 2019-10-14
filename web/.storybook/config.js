import { configure, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { action } from '@storybook/addon-actions';
import '../src/styles/main.css';
import '../src/styles/form.css';
import '../src/styles/syntaxHighlighter.css';
import '../src/styles/typography.css';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    prepareForInline: (storyFn) => storyFn(),
  },
});

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

configure(require.context('../src', true, /\.stories\.js$/), module);
