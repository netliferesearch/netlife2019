import React from 'react';

import { storiesOf } from '@storybook/react';

import Person from '../src/components/Person';
import RadioBlocks from '../src/components/RadioBlocks';
import EventListItem from '../src/components/EventListItem';
import TextImage from '../src/components/TextImage';
import ContactSection from '../src/components/ContactSection';

import '../public/style/tailwind.css';

storiesOf('Person', module)
  .add('Person', () => (
    <div className="mx-4">
      <Person
        image={{
          asset: {
            fluid: {
              base64:
                'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYHCAX/xAAkEAACAgIBBAIDAQAAAAAAAAABAgMEAAURBgcSITFREyMykf/EABcBAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAfEQACAQQCAwAAAAAAAAAAAAAAAQIREjJRFCFBsfD/2gAMAwEAAhEDEQA/ANb1kTz6SWwzshUHhU+FH0MmNNR19+Wy27le1KT+ryf0p+iMkO8HXVnpeODVaSfxeRi8jj2QvPxkDb7g2tdNRsUW5VnDyq55DjJ43NLQ+dict+DpequqowJBJIsDKP4C4zwadzX7enBfeo8xnQOGXnj2PjGHkxj196I3Ft1Oee+8KQdWziPkBVUAc+hkFr1FmxBFKSUYHGM3HEoeRvXSvV210mhqUKckRgiThfyJ5H/cYxiqsbatH//Z',
              aspectRatio: 1,
              src:
                'https://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=260&h=260&fit=crop',
              srcSet:
                'https://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=65&h=65&fit=crop 65w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=130&h=130&fit=crop 130w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=260&h=260&fit=crop 260w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=390&h=390&fit=crop 390w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=520&h=520&fit=crop 520w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=780&h=780&fit=crop 780w',
              srcWebp:
                'https://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=260&h=260&fit=crop&fm=webp',
              srcSetWebp:
                'https://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=65&h=65&fit=crop&fm=webp 65w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=130&h=130&fit=crop&fm=webp 130w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=260&h=260&fit=crop&fm=webp 260w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=390&h=390&fit=crop&fm=webp 390w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=520&h=520&fit=crop&fm=webp 520w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=780&h=780&fit=crop&fm=webp 780w',
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
                'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYHCAX/xAAkEAACAgIBBAIDAQAAAAAAAAABAgMEAAURBgcSITFREyMykf/EABcBAAMBAAAAAAAAAAAAAAAAAAEDBAL/xAAfEQACAQQCAwAAAAAAAAAAAAAAAQIREjJRFCFBsfD/2gAMAwEAAhEDEQA/ANb1kTz6SWwzshUHhU+FH0MmNNR19+Wy27le1KT+ryf0p+iMkO8HXVnpeODVaSfxeRi8jj2QvPxkDb7g2tdNRsUW5VnDyq55DjJ43NLQ+dict+DpequqowJBJIsDKP4C4zwadzX7enBfeo8xnQOGXnj2PjGHkxj196I3Ft1Oee+8KQdWziPkBVUAc+hkFr1FmxBFKSUYHGM3HEoeRvXSvV210mhqUKckRgiThfyJ5H/cYxiqsbatH//Z',
              aspectRatio: 1,
              src:
                'https://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=260&h=260&fit=crop',
              srcSet:
                'https://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=65&h=65&fit=crop 65w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=130&h=130&fit=crop 130w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=260&h=260&fit=crop 260w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=390&h=390&fit=crop 390w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=520&h=520&fit=crop 520w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=780&h=780&fit=crop 780w',
              srcWebp:
                'https://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=260&h=260&fit=crop&fm=webp',
              srcSetWebp:
                'https://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=65&h=65&fit=crop&fm=webp 65w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=130&h=130&fit=crop&fm=webp 130w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=260&h=260&fit=crop&fm=webp 260w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=390&h=390&fit=crop&fm=webp 390w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=520&h=520&fit=crop&fm=webp 520w,\nhttps://cdn.sanity.io/images/v1k28emo/production/0a2f26731ea82e2883ae32af8c6f2d29f4f1d7e2-1000x1000.jpg?w=780&h=780&fit=crop&fm=webp 780w',
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
