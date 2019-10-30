import React from 'react';
import { action } from '@storybook/addon-actions';
import RadioBlock from './RadioBlocks';

export default {
  title: 'Components|RadioBlocks',
  parameters: {
    component: RadioBlock,
    componentSubtitle: 'A RadioBlocks is ? This component isnt in use and not working',
  },
};

const items = [
  {
    label: "label1",
    value: "value1",
    checked: false
  },
  {
    label: "label2",
    value: "value2",
    checked: true
}];

export const radioBlock = () => (
  <RadioBlock legend="blockLegend" changeItems={action('button clicked')} items={items} />
);

radioBlock.story = { name: 'with text' };
