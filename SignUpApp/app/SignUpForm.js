import React from 'react';
import { connect } from 'react-redux';



const emptyField = (message) => (field) => console.log(field) && field.value === '' ? { value: field.value, error: message } : field  
const validate = (validators, formField) => validators.reduce(
  (field, validator) => console.log(validator(formField.value)) && (Object.assign({}, field, validator(formField.value))), 
  formField  
);

// const nameValidation1 = (formField) => validate([emptyField("Missing Name")], formField);

const nameValidation = () => ({name: { value: '',  error: 'Missing Name' }})

const SignUpForm = ({ form, updateValue }) => (
  <form>
      <input onChange={(evt) => updateValue(nameValidation({value: evt.target.value}))} type='text' placeholder='Name' id='name' />
      <label>{form.name.error}</label>
      <input type='text' placeholder='Email' id='email' />
      <label>{form.email.error}</label>
      <input type='text' placeholder='Password' id='password' />
      <label>{form.password.error}</label>
      <input type='text' placeholder='Confirm Password' id='passwordConfirmation' />
      <label>{form.passwordConfirmation.error}</label>
      <button onClick={() => updateValue(nameValidation(form.name))} id="submitFormBtn"> Submit </button>
  </form>
);
const mapStateToProps = (state) => ({form: state.form});
const mapDispatchToProps = (dispatch) => ({
  updateValue: (formField) => dispatch({ type: 'form/update', formField })
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
