import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonLink } from './Button';

export default {
  title: 'Components|Button',
  component: Button,
  parameters: {
    component: Button,
    componentSubtitle: 'A button is a button you can click.',
  },
};

// TODO: button should have a prop that changes the state: focus, disabled, primary etc
export const button = () => (<>
  <Button onClick={action('button clicked')} value="Text Button" type="submit"/>
  <ButtonLink href="" value="Text Link Button"/>
</>);
export const text = () => <Button onClick={action('button clicked')} value="Text Button" type="submit"/>;
export const textLink = () => <ButtonLink href="" value="Link Button"/>;

text.story = { name: 'with text' };
textLink.story = { name: 'link with text' };
