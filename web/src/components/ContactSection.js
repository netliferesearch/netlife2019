import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';
import Form from './Form';

const ContactSection = ({ heading, persons, form, formName }) => (
  <section className="flex flex-wrap w-full -mx-4">
    <div className="w-full md:w-1/2 px-4">
      {heading && <h2 className="text-md -mt-2 md:mr-4">{heading}</h2>}
      {form?.formFields && (
        <div className="my-4 md:mr-4">
          <Form
            submitButtonText={form?.submitButtonText}
            formFields={form?.formFields}
            formName={formName || 'default'}
          />
        </div>
      )}
    </div>
    <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
      {persons.map((person, index) => (
        <div className={`${index > 0 ? 'mt-4 md:mt-10' : ''}`} key={person._id}>
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

ContactSection.defaultProps = {
  heading: null,
  form: null,
};

ContactSection.propTypes = {
  heading: PropTypes.any,
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
  form: PropTypes.oneOfType(PropTypes.bool, PropTypes.shape()),
  formName: PropTypes.string
};

export default ContactSection;
