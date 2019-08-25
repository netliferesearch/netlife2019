import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';

const ContactSection = ({ heading, persons }) => (
  <section className="flex flex-wrap w-full -mx-4">
    <div className="w-full md:w-1/2 px-4">
      <h2 className="text-lg -mt-2">{heading}</h2>
    </div>
    <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
      {persons.map((person, index) => (
        <div className={`${index > 0 ? 'mt-4 md:mt-10' : ''}`}>
          <Person
            name={person.name}
            email={person.email}
            role={person.role}
            services={person.services}
            phoneNumber={person.phoneNumber}
            image={person.image}
            small
          />
        </div>
      ))}
    </div>
  </section>
);

ContactSection.propTypes = {
  heading: PropTypes.string.isRequired,
  persons: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ContactSection;
