import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonLink } from './Button';

export default {
  title: 'Components|Button',
  component: Button
};

export const text = () => <Button onClick={action('button clicked')} value="Custom Button" type="submit"/>;
export const textLink = () => <ButtonLink href="" value="Custom Link Button"/>;

text.story = { name: 'with text' };
textLink.story = { name: 'link with text' };
