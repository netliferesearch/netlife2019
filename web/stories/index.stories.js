import React from 'react';

import { storiesOf } from '@storybook/react';

import Person from '../src/components/Person';
import RadioBlocks from '../src/components/RadioBlocks';
import EventListItem from '../src/components/EventListItem';
import TextImage from '../src/components/TextImage';
import Image from '../src/components/Image';
import ContactSection from '../src/components/ContactSection';
import PersonGroup from '../src/components/PersonGroup';

import '../public/style/tailwind.css';

storiesOf('Person', module)
  .add('Person', () => (
    <div className="mx-4">
      <Person
        image={{
          asset: {
            fluid: {
              base64:
                'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcDBAUG/8QAIxAAAQMEAgEFAAAAAAAAAAAAAQIDBAAFERIhUQYHIjFh0f/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/EABkRAAMAAwAAAAAAAAAAAAAAAAABEQIhQf/aAAwDAQACEQMRAD8Aj8UgNXe+xEuEaIJ2UBzjqteDZ21XGS6p5CoMeSWsH5V1VX0XW3KmSdz7xwOxTOs1vhW2bITOXuk54UAEY7P3WSrRVdFVPdKZrwSkJTscAdUV1Hl9nhi8KXAS4WHUBY15GTn8oprFhqP/2Q==',
              aspectRatio: 1,
              src:
                'https://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=260&h=260&fit=crop',
              srcSet:
                'https://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=65&h=65&fit=crop 65w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=130&h=130&fit=crop 130w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=260&h=260&fit=crop 260w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=390&h=390&fit=crop 390w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=520&h=520&fit=crop 520w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=780&h=780&fit=crop 780w',
              srcWebp:
                'https://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=260&h=260&fit=crop&fm=webp',
              srcSetWebp:
                'https://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=65&h=65&fit=crop&fm=webp 65w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=130&h=130&fit=crop&fm=webp 130w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=260&h=260&fit=crop&fm=webp 260w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=390&h=390&fit=crop&fm=webp 390w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=520&h=520&fit=crop&fm=webp 520w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=780&h=780&fit=crop&fm=webp 780w',
              sizes: '(max-width: 260px) 100vw, 260px'
            }
          }
        }}
        slug="/example"
        name="Kittson"
        email="cute@af.cat"
        phoneNumber="99347772"
        services={[{ name: 'Purring' }, { name: 'Snuggling' }]}
      />
    </div>
  ))
  .add('Person with role and services', () => (
    <div className="mx-4">
      <Person
        image={{
          asset: {
            fluid: {
              base64:
                'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcDBAUG/8QAIxAAAQMEAgEFAAAAAAAAAAAAAQIDBAAFERIhUQYHIjFh0f/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/EABkRAAMAAwAAAAAAAAAAAAAAAAABEQIhQf/aAAwDAQACEQMRAD8Aj8UgNXe+xEuEaIJ2UBzjqteDZ21XGS6p5CoMeSWsH5V1VX0XW3KmSdz7xwOxTOs1vhW2bITOXuk54UAEY7P3WSrRVdFVPdKZrwSkJTscAdUV1Hl9nhi8KXAS4WHUBY15GTn8oprFhqP/2Q==',
              aspectRatio: 1,
              src:
                'https://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=260&h=260&fit=crop',
              srcSet:
                'https://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=65&h=65&fit=crop 65w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=130&h=130&fit=crop 130w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=260&h=260&fit=crop 260w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=390&h=390&fit=crop 390w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=520&h=520&fit=crop 520w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=780&h=780&fit=crop 780w',
              srcWebp:
                'https://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=260&h=260&fit=crop&fm=webp',
              srcSetWebp:
                'https://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=65&h=65&fit=crop&fm=webp 65w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=130&h=130&fit=crop&fm=webp 130w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=260&h=260&fit=crop&fm=webp 260w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=390&h=390&fit=crop&fm=webp 390w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=520&h=520&fit=crop&fm=webp 520w,\nhttps://cdn.sanity.io/images/v1k28emo/production/6aa68dffdaa6936dee6ec656777221441e7b38f3-915x720.jpg?w=780&h=780&fit=crop&fm=webp 780w',
              sizes: '(max-width: 260px) 100vw, 260px'
            }
          }
        }}
        slug="/example"
        name="Kittson"
        email="cute@af.cat"
        phoneNumber="99347772"
        role="CEO"
        services={[{ name: 'Purring' }, { name: 'Snuggling' }]}
      />
    </div>
  ));

storiesOf('PersonGroup', module).add('PersonGroup', () => {
  return (
    <PersonGroup
      groupKey="SUPERDUPER Cool Cats"
      persons={[
        {
          name: 'Kittson McPur',
          slug: '/example',
          image: 'http://placekitten.com/333/333',
          email: 'cute@af.cat',
          role: 'CEO',
          phoneNumber: '99347772',
          services: [{ name: 'Leking' }, { name: 'Kosing' }]
        },
        {
          name: 'Shakira Attiladottir',
          slug: '/example',
          role: 'Scrum master',
          image: 'http://placekitten.com/666/666',
          email: 'best@cat.fact',
          phoneNumber: '12312123',
          services: [{ name: 'Jakt' }, { name: 'Kosing' }]
        }
      ]}
    />
  );
});

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

// TODO: Replace src="..." with image={...}

storiesOf('TextImage', module)
  .add('default', () => (
    <TextImage src="http://placehold.it/200x133" alt="placeholder image">
      You can write <strong>anything</strong> here.
    </TextImage>
  ))
  .add('image left', () => (
    <TextImage
      src="http://placehold.it/200x133"
      alt="placeholder image"
      imageLeft
    >
      You can write <strong>anything</strong> here.
    </TextImage>
  ));

storiesOf('Image', module)
  .add('default', () => (
    <Image src="http://placehold.it/200x133" alt="placeholder image">
      You can write <strong>anything</strong> here.
    </Image>
  ))
  .add('square', () => (
    <Image
      src="http://placehold.it/200x133"
      alt="placeholder image"
      aspectRatio="1:1"
    >
      You can write <strong>anything</strong> here.
    </Image>
  ))
  .add('landscape', () => (
    <Image
      src="http://placehold.it/200x133"
      alt="placeholder image"
      aspectRatio="2:1"
    >
      You can write <strong>anything</strong> here.
    </Image>
  ));

storiesOf('ContactSection', module).add('ContactSection', () => (
  <ContactSection
    heading="Lurer du på noe om våre kurs og konferanser? Kontakt Anette eller Merete."
    persons={[
      {
        name: 'Kittson McPur',
        image: 'http://placekitten.com/333/333',
        email: 'cute@af.cat',
        phoneNumber: '99347772',
        services: [{ name: 'Leking' }, { name: 'Kosing' }]
      },
      {
        name: 'Shakira Attiladottir',
        image: 'http://placekitten.com/666/666',
        email: 'best@cat.fact',
        phoneNumber: '12312123',
        services: [{ name: 'Jakt' }, { name: 'Kosing' }]
      }
    ]}
  />
));
