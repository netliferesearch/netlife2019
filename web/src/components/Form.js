import React, { useEffect, useState } from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import qs from 'qs';
import PropTypes from 'prop-types';
import standardSlugify from 'standard-slugify';
import { Button } from '../components/Button';

require('../../node_modules/polyfill-object.fromentries');

// This component consumes the Form Object from Sanity.
// It creates a validation schema based on the objects fields.
// It renders components based on the object fields.
// Using Formik and Yup it connects the schema validation with the form library.

// Creating values for the validation schema.
// Read more about the validation schema here: https://github.com/jquense/yup
// The strings after the or clause are the fallback texts. If required() receives undefined or null (not just falsy), it will not enforce its rule.
function addValidation(field) {
  if (
    field.type === 'string' ||
    field.type === 'textarea' ||
    field.type === 'number'
  ) {
    return Yup.string().required(
      field.required ? field.errorMessage || 'Obligatorisk felt' : null
    );
  }
  if (field.type === 'email') {
    return Yup.string()
      .email('Ugyldig epost')
      .required(field.required && (field.errorMessage || 'Obligatorisk felt'));
  }
  if (field.type === 'radio' || field.type === 'select') {
    return Yup.string().required(
      field.required ? field.errorMessage || 'Obligatorisk felt' : null
    );
  }
  if (field.type === 'checkbox') {
    if (field.required) {
      return Yup.boolean()
        .oneOf([true])
        .required(field.errorMessage || 'Obligatorisk avkrysningsboks');
    } else {
      return Yup.boolean();
    }
  }
  if (field.type === 'tel') {
    return Yup.string().required(
      field.required ? field.errorMessage || 'Obligatorisk felt' : null
    );
  }
}

const formFieldErrorMessage = ({ children }) => (
  <div className="bg-red py-2 px-4 text-white mb-6 mt-1">
    <strong className="inline-block mr-2">X</strong> {children}
  </div>
);

const Form = ({ formFields, submitButtonText, formName }) => {
  const [formValues, setFormValues] = useState({});
  const [formMessage, setFormMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleSubmit = async formValues => {
      const data = {
        ...formValues
      };
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url: '/'
      };
      if (Object.keys(formValues).length > 0) {
        try {
          await axios(options);
          setFormMessage({
            type: 'success',
            message: 'Takk for innsending!'
          });
        } catch (e) {
          setFormMessage({
            type: 'error',
            message: 'Noe gikk galt! Prøv igjen senere.'
          });
        }
      }
    };

    if (isSubmitting) {
      setIsSubmitting(false);
    }

    handleSubmit(formValues);
  }, [formValues, isSubmitting]);

  const SignupSchema = Yup.object().shape(
    Object.fromEntries(
      formFields.map(field => [
        standardSlugify(field.label),
        addValidation(field)
      ])
    )
  );

  return (
    <>
      {/*
      <form data-netlify="true" method="POST" action="/" hidden name={formName}>
        <input type="text" name="fornavn" />
        <input type="email" name="epost" />
      </form>
      */}
      <Formik
        initialValues={{
          'bot-field': '',
          ...Object.fromEntries(
            formFields.map(field => [standardSlugify(field.label), ''])
          ),
          'form-name': formName
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          setIsSubmitting(true);
          setFormValues({ ...values });
        }}
      >
        {({ isSubmitting }) => (
          <FormikForm
            name={formName}
            method="POST"
            action="#"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            noValidate
          >
            <Field type="hidden" name="form-name" />
            <Field type="hidden" name="bot-field" />

            {formFields.map(field => {
              const name = standardSlugify(field.label);
              if (field.type === 'string') {
                return (
                  <div key={field._key} className="mb-5">
                    <label htmlFor={name}>{field.label}</label>
                    <Field
                      type="text"
                      id={name}
                      name={name}
                      className="w-full mt-1 pl-2 py-1 appearance-none border border-black rounded-none outline-none focus:bg-green bg-transparent"
                      validate
                    />
                    <ErrorMessage
                      name={name}
                      component={formFieldErrorMessage}
                    />
                  </div>
                );
              } else if (field.type === 'textarea') {
                return (
                  <div key={field._key} className="mb-5">
                    <label htmlFor={name}>{field.label}</label>
                    <Field
                      type="textarea"
                      component="textarea"
                      id={name}
                      name={name}
                      className="w-full mt-1 pl-2 py-1 appearance-none border border-black rounded-none outline-none focus:bg-green bg-transparent"
                      validate
                    />
                    <ErrorMessage
                      name={name}
                      component={formFieldErrorMessage}
                    />
                  </div>
                );
              } else if (field.type === 'email') {
                return (
                  <div key={field._key} className="mb-5">
                    <label htmlFor={name}>{field.label}</label>
                    <Field
                      type="email"
                      id={name}
                      name={name}
                      className="w-full mt-1 pl-2 py-1 appearance-none border border-black rounded-none outline-none focus:bg-green bg-transparent"
                      validate
                    />
                    {field.description && (
                      <div className="text-black">{field.description}</div>
                    )}
                    <ErrorMessage
                      name={name}
                      component={formFieldErrorMessage}
                    />
                  </div>
                );
              } else if (field.type === 'tel') {
                return (
                  <div key={field._key} className="mb-5">
                    <label htmlFor={name}>{field.label}</label>
                    <Field
                      type="tel"
                      id={name}
                      name={name}
                      className="w-full mt-1 pl-2 py-1 appearance-none border border-black rounded-none outline-none focus:bg-green"
                      validate
                    />
                    <ErrorMessage
                      name={name}
                      component={formFieldErrorMessage}
                    />
                  </div>
                );
              } else if (field.type === 'select') {
                return (
                  <div key={field._key} className="mb-5">
                    <label htmlFor={name}>{field.label}</label>
                    <div className="relative flex">
                      <Field
                        type="select"
                        component="select"
                        id={name}
                        name={name}
                        className="relative w-full mt-1 pl-2 py-1 appearance-none border border-black rounded-none outline-none focus:bg-green bg-white"
                        validate
                      >
                        <option value="">-- Velg --</option>
                        {field.items.map(item => (
                          <option>{item}</option>
                        ))}
                      </Field>
                      <div className="absolute self-center right-0 pt-1 mr-2">
                        
                      </div>
                    </div>
                    <ErrorMessage
                      name={name}
                      component={formFieldErrorMessage}
                    />
                  </div>
                );
              } else if (field.type === 'radio') {
                return (
                  <fieldset key={field._key} className="mb-5">
                    <legend>{field.label}</legend>
                    {field.items.map(item => (
                      <div>
                        <Field
                          type="radio"
                          component="input"
                          className="sr-only"
                          id={`${name}-${item}`}
                          name={name}
                          value={item}
                          validate
                        />
                        <label
                          htmlFor={`${name}-${item}`}
                          className="flex items-center cursor-pointer"
                        >
                          <span className="inline-block w-3 h-3 mr-1 rounded-full bg-white border-black"></span>
                          {field.label}
                        </label>
                      </div>
                    ))}
                    <ErrorMessage
                      name={name}
                      component={formFieldErrorMessage}
                    />
                  </fieldset>
                );
              } else if (field.type === 'checkbox') {
                return (
                  <fieldset key={field._key} className="mb-5">
                    <legend>{field.label}</legend>
                    {field.items.map(item => (
                      <div>
                        <Field
                          type="checkbox"
                          component="input"
                          className="sr-only"
                          id={`${name}-${item}`}
                          name={name}
                          value={item}
                          validate
                        />
                        <label
                          htmlFor={`${name}-${item}`}
                          className="flex items-center cursor-pointer"
                        >
                          {/* Used for the checkmark graphics */}
                          <span></span>
                          {item}
                        </label>
                      </div>
                    ))}
                    <ErrorMessage
                      name={name}
                      component={formFieldErrorMessage}
                    />
                  </fieldset>
                );
              }
            })}
            {formMessage && (
              <div
                className={`${
                  formMessage.type === 'error' ? 'bg-red' : 'bg-green'
                } py-2 px-4 text-black mb-6 mt-1`}
              >
                {formMessage.message}
              </div>
            )}
            <Button
              type="submit"
              value={submitButtonText || 'Send inn'}
              disabled={isSubmitting}
            />
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

Form.propTypes = {
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
  submitButtonText: PropTypes.string,
  formName: PropTypes.string.isRequired
};

export default Form;
