import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Person from '../src/components/Person';
import RadioBlocks from '../src/components/RadioBlocks';
import EventListItem from '../src/components/EventListItem';

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

storiesOf('RadioBlocks', module)
  .add(
    'Pre checked, with console log func',
    () => (
      <RadioBlocks
        legend="Description of this input"
        // This can be from state
        items={[
          { label: 'Teknologi', value: 'teknologi', checked: true },
          { label: 'Design', value: 'design', checked: false },
          { label: 'Innhold', value: 'innhold', checked: false }
        ]}
        // It returns items
        changeItems={item => {
          console.log(item);
        }}
      />
    ),
    {
      notes: 'Check out the default function'
    }
  )
  .add('No checked and console log func', () => {
    return (
      <RadioBlocks
        legend={'test'}
        // This can be from state
        items={[
          { label: 'Teknologi', value: 'teknologi' },
          { label: 'Design', value: 'design' },
          { label: 'Innhold', value: 'innhold' }
        ]}
        changeItems={item => {
          console.log(item);
        }}
      />
    );
  });

storiesOf('EventListItem', module)
  .add('default', () => (
    <ul>
      <EventListItem
        title="some title"
        slug="/test"
        dates={['2019-02-10', '2019-02-11']}
      >
        <p className="text-lg mb-4">
          Vi skriver for mye og tegner for lite i jobben. Lær hvordan du
          oversetter ord til tegning.
        </p>
        <p>Netlife, Youngstorget 3, Oslo</p>
        <p>
          <time timedate="12:00">12:00</time>–
          <time timedate="16:00">16:00</time>
        </p>
        <p>3000 kroner eks. mva.</p>
      </EventListItem>
    </ul>
  ))
  .add('multiple items', () => (
    <ul>
      <EventListItem title="some title" slug="/test" dates={['2019-02-12']}>
        <p className="text-lg mb-4">
          Vi skriver for mye og tegner for lite i jobben. Lær hvordan du
          oversetter ord til tegning.
        </p>
        <p>Netlife, Youngstorget 3, Oslo</p>
        <p>
          <time timedate="12:00">12:00</time>–
          <time timedate="16:00">16:00</time>
        </p>
        <p>3000 kroner eks. mva.</p>
      </EventListItem>
      <EventListItem
        title="some title very very very sdfbsdhfbkdjshfds very long title"
        slug="/test"
        dates={['2019-02-10', '2019-02-11']}
      >
        <p className="text-lg mb-4">
          Vi skriver for mye og tegner for lite i jobben. Lær hvordan du
          oversetter ord til tegning.
        </p>
        <p>Netlife, Youngstorget 3, Oslo</p>
        <p>
          <time timedate="12:00">12:00</time>–
          <time timedate="16:00">16:00</time>
        </p>
        <p>3000 kroner eks. mva.</p>
      </EventListItem>
      <EventListItem
        title="some title"
        slug="/test"
        dates={['2019-02-10', '2019-02-11']}
      >
        <p className="text-lg mb-4">
          Vi skriver for mye og tegner for lite i jobben. Lær hvordan du
          oversetter ord til tegning.
        </p>
        <p>Netlife, Youngstorget 3, Oslo</p>
        <p>
          <time timedate="12:00">12:00</time>–
          <time timedate="16:00">16:00</time>
        </p>
        <p>3000 kroner eks. mva.</p>
      </EventListItem>
    </ul>
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
