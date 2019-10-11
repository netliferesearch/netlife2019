import React from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import standardSlugify from 'standard-slugify';
import { Button } from '../components/Button';

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

const testing = ({ children }) => (
  <div className="bg-red py-2 px-4 text-white mb-6 mt-1">
    <strong className="inline-block mr-2">X</strong> {children}
  </div>
);

const Form = ({ formFields, submitButtonText }) => {
  const SignupSchema = Yup.object().shape(
    Object.fromEntries(
      formFields.map(field => [
        standardSlugify(field.label),
        addValidation(field)
      ])
    )
  );

  return (
    <Formik
      initialValues={Object.fromEntries(
        formFields.map(field => [standardSlugify(field.label), ''])
      )}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm data-netlify="true">
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
                    className="w-full mt-1 pl-2 py-1 appearance-none border border-black rounded-none outline-none focus:bg-green"
                    validate
                  />
                  <ErrorMessage name={name} component={testing} />
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
                    className="w-full mt-1 pl-2 py-1 appearance-none border border-black rounded-none outline-none focus:bg-green"
                    validate
                  />
                  <ErrorMessage name={name} component={testing} />
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
                    className="w-full mt-1 pl-2 py-1 appearance-none border border-black rounded-none outline-none focus:bg-green"
                    validate
                  />
                  {field.description && (
                    <div className="text-black">{field.description}</div>
                  )}
                  <ErrorMessage name={name} component={testing} />
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
                  <ErrorMessage name={name} component={testing} />
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
                  <ErrorMessage name={name} component={testing} />
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
                  <ErrorMessage name={name} component={testing} />
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
                  <ErrorMessage name={name} component={testing} />
                </fieldset>
              );
            }
          })}
          <Button
            type="submit"
            value={submitButtonText || 'Send inn'}
            disabled={isSubmitting}
          />
        </FormikForm>
      )}
    </Formik>
  );
};

Form.propTypes = {
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
  submitButtonText: PropTypes.string
};

export default Form;
