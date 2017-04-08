import React from 'react';
import { connect } from 'react-redux';

const basicValidation = (message) => (field) => (field.value === '' ? Object.assign({}, field, { error: message }) : Object.assign({}, field));

const validate = (validators, formField) => validators.reduce(
  (field, validator) => (Object.assign({}, field, validator(formField))), 
  formField  
);

const nameValidation = (formField) => validate([basicValidation("Missing Name")], formField);
const emailValidation = (formField) => validate([basicValidation("Missing Email")], formField);
const passwordValidation = (formField) => validate([basicValidation("Missing Password")], formField);
const passwordConfirmationValidation = (formField) => validate([basicValidation("Missing Password Confirmation")], formField);

const SignUpForm = ({ form, updateValue }) => {
  const formValidations = [
    { name: nameValidation(form.name) },
    { email: emailValidation(form.email) },
    { password: passwordValidation(form.password) },
    { password: passwordConfirmationValidation(form.passwordConfirmation) }
  ];
  
  const runValidation = () => formValidations.forEach((validatedValue) => updateValue(validatedValue))

  return <form>
      <input onChange={(e) => updateValue({ name: { value: e.target.value }} )} type='text' placeholder='Name' id='name' />
      <label>{form.name.error}</label>
      <input onChange={(e) => updateValue({ email: { value: e.target.value }} )} type='text' placeholder='Email' id='email' />
      <label>{form.email.error}</label>
      <input onChange={(e) => updateValue({ password: { value: e.target.value }} )} type='text' placeholder='Password' id='password' />
      <label>{form.password.error}</label>
      <input onChange={(e) => updateValue({ passwordConfirmation: { value: e.target.value }} )} type='text' placeholder='Confirm Password' id='passwordConfirmation' />
      <label>{form.passwordConfirmation.error}</label>
      <button onClick={runValidation} id="submitFormBtn"> Submit </button>
  </form>
};

const mapStateToProps = (state) => ({form: state.form});
const mapDispatchToProps = (dispatch) => ({
  updateValue: (formField) => dispatch({ type: 'form/update', formField })
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
