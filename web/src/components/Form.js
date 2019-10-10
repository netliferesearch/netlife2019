import React from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import standardSlugify from 'standard-slugify';

// This component consumes the Form Object from Sanity.
// It creates a validation schema based on the objects fields.
// It renders components based on the object fields.
// Using Formik and Yup it connects the schema validation with the form library.

// Creating values for the validation schema.
// Read more about the validation schema here: https://github.com/jquense/yup
// The strings after the or clause are the fallback texts. If required() receives a falsy value, it will not enforce its rule.
function addValidation(field) {
  if (
    field.type === 'string' ||
    field.type === 'textarea' ||
    field.type === 'number'
  ) {
    return Yup.string().required(
      field.required && (field.errorMessage || 'Obligatorisk felt')
    );
  }
  if (field.type === 'email') {
    return Yup.string()
      .email()
      .required(field.required && (field.errorMessage || 'Ugyldig epost'));
  }
  if (field.type === 'radio' || field.type === 'select') {
    return Yup.string().required(
      field.required && (field.errorMessage || 'Obligatorisk felt')
    );
  }
  if (field.type === 'checkbox') {
    if (field.required) {
      return Yup.boolean()
        .oneOf([true])
        .required(field.errorMessage || 'Obligatorisk avkrysningsboks');
    } else {
      return Yup.array();
    }
  }
  if (field.type === 'tel') {
    return Yup.string().required(
      field.required && (field.errorMessage || 'Obligatorisk felt')
    );
  }
}

const Form = ({ formFields }) => {
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
        <FormikForm>
          {formFields.map(field => {
            const name = standardSlugify(field.label);
            if (field.type === 'string') {
              return (
                <div key={field._key}>
                  <label htmlFor={name}>{field.label}</label>
                  <Field
                    type="text"
                    id={name}
                    name={name}
                    className="block border"
                    validate
                  />
                  <ErrorMessage name={name} component="div" />
                </div>
              );
            } else if (field.type === 'textarea') {
              return (
                <div key={field._key}>
                  <label htmlFor={name}>{field.label}</label>
                  <Field
                    type="textarea"
                    component="textarea"
                    id={name}
                    name={name}
                    className="block border"
                    validate
                  />
                  <ErrorMessage name={name} component="div" />
                </div>
              );
            } else if (field.type === 'email') {
              return (
                <div key={field._key}>
                  <label htmlFor={name}>{field.label}</label>
                  <Field
                    type="email"
                    id={name}
                    name={name}
                    className="block border"
                    validate
                  />
                  <ErrorMessage name={name} component="div" />
                </div>
              );
            } else if (field.type === 'tel') {
              return (
                <div key={field._key}>
                  <label htmlFor={name}>{field.label}</label>
                  <Field
                    type="tel"
                    id={name}
                    name={name}
                    className="block border"
                    validate
                  />
                  <ErrorMessage name={name} component="div" />
                </div>
              );
            } else if (field.type === 'select') {
              return (
                <div key={field._key}>
                  <label htmlFor={name}>{field.label}</label>
                  <Field
                    type="select"
                    component="select"
                    id={name}
                    name={name}
                    className="block border"
                    validate
                  >
                    {field.items.map(item => (
                      <option>{item}</option>
                    ))}
                  </Field>
                  <ErrorMessage name={name} component="div" />
                </div>
              );
            } else if (field.type === 'radio') {
              return (
                <fieldset key={field._key}>
                  <legend>{field.label}</legend>
                  {field.items.map(item => (
                    <>
                      <Field
                        type="radio"
                        component="input"
                        id={`${name}-${item}`}
                        name={name}
                        value={item}
                        validate
                      />
                      <label htmlFor={`${name}-${item}`}>{field.label}</label>
                    </>
                  ))}
                  <ErrorMessage name={name} component="div" />
                </fieldset>
              );
            } else if (field.type === 'checkbox') {
              return (
                <fieldset key={field._key}>
                  <legend>{field.label}</legend>
                  {field.items.map(item => (
                    <>
                      <Field
                        type="checkbox"
                        component="input"
                        id={`${name}-${item}`}
                        name={name}
                        value={item}
                        validate
                      />
                      <label htmlFor={`${name}-${item}`}>{field.label}</label>
                    </>
                  ))}
                  <ErrorMessage name={name} component="div" />
                </fieldset>
              );
            }
          })}
          <button type="submit" disabled={isSubmitting}>
            Send inn
          </button>
        </FormikForm>
      )}
    </Formik>
  );
};

Form.propTypes = {
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Form;
