import React from 'react';
import * as yup from 'yup';
import { Formik, Field, Form } from 'formik';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(1)
    .max(20)
    .required()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required()
    .trim(),
  email: yup
    .string()
    .email()
    .matches(/(?:.*(\.com|\.net))$/, 'Email must end with .com or .net')
    .required()
    .trim(),
  password: yup
    .string()
    .min(6, 'Password should be min 6 characters')
    .max(16, 'Password should be max 16 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      'Password must exist (A-a, 1-9)'
    )
    .required()
    .trim(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    onSubmit(values, resetForm);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="name">
          <Field type="text" name="name" placeholder="Enter your name"></Field>
        </label>
        <label htmlFor="email">
          <Field
            type="text"
            name="email"
            placeholder="Enter your email"
          ></Field>
        </label>
        <label htmlFor="password">
          <Field
            type="text"
            name="password"
            placeholder="Enter your password"
          ></Field>
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
