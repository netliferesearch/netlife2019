import React from 'react';

export default {
  title: 'Basics|Welcome'
};

export const toStorybook = () => (
  <article>
    <h1 className="text-lg">Welcome to storybook</h1>
    <p>This is a UI component dev environment for your app.</p>
    <p>
      A story is a single state of one or more UI components.
      <br />
      You can have as many stories as you want. (Basically a story is like a
      visual test case.)
    </p>
    <p>
      See these sample
      <button type="button">stories</button> for a component called&nbsp;
      <code>Button</code>.
    </p>
    <p>
      Usually we create stories with smaller UI components in the app.
      <br />
      Have a look at the&nbsp;
      <a href="https://storybook.js.org/basics/writing-stories">
        Writing Stories
      </a>
      &nbsp;section in our documentation.
    </p>
  </article>
);

toStorybook.story = {
  name: "to Netlife's Storybook"
};
