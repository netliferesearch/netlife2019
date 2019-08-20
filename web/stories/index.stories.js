import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Person from '../src/components/Person';

import '../public/style/tailwind.css';

storiesOf('Person', module).add('Person', () => (
  <Person
    image="http://placekitten.com/333/333"
    slug="/example"
    name="Kittson"
    email="cute@af.cat"
    phoneNumber="99347772"
    // role="Kitty cat"
    services={[{ name: 'Purring' }, { name: 'Snuggling' }]}
  />
));

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
