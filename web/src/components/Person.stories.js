import React from 'react';
import { action } from '@storybook/addon-actions';
import Person from './Person';

const personData = {
  name: "Ole",
  email: "ole@netlife.com",
  role: "Developer",
  services: [{}],
  phoneNumber: "123456789"
};

export default {
  title: 'Components|Person',
  component: Person,
  parameters: {
    component: Person,
    componentSubtitle: 'A person component shows a card with employee information.'
  }
};

export const personSmall = () => (
  <Person
    name={personData.name}
    email={personData.email}
    role={personData.role}
    services={personData.services}
    phoneNumber={personData.phoneNumber}
    image={personData.image}
    small
  />
);

personSmall.story = { name: 'small person card' };
