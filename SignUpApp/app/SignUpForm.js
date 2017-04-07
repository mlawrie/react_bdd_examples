import React from 'react';
import { connect } from 'react-redux';

const basicValidation = (message) => (field) => ({value: '', error: message });

const validate = (validators, formField) => validators.reduce(
  (field, validator) => (Object.assign({}, field, validator(formField.value))), 
  formField  
);

const nameValidation = (formField) => validate([basicValidation("Missing Name")], formField);

const SignUpForm = ({ form, updateValue }) => (
  <form>
      <input type='text' placeholder='Name' id='name' />
      <label>{form.name.error}</label>
      <input type='text' placeholder='Email' id='email' />
      <label>{form.email.error}</label>
      <input type='text' placeholder='Password' id='password' />
      <label>{form.password.error}</label>
      <input type='text' placeholder='Confirm Password' id='passwordConfirmation' />
      <label>{form.passwordConfirmation.error}</label>
      <button onClick={() => updateValue({ name: nameValidation(form.name)})} id="submitFormBtn"> Submit </button>
  </form>
);
const mapStateToProps = (state) => ({form: state.form});
const mapDispatchToProps = (dispatch) => ({
  updateValue: (formField) => dispatch({ type: 'form/update', formField })
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
