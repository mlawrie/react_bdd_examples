import React from 'react';
import { connect } from 'react-redux';

const SignUpForm = ({ form }) => (
  <form>
      <input type='text' placeholder='Name' id='name' />
      <label>{form.name.error}</label>
      <input type='text' placeholder='Email' id='email' />
      <label>{form.email.error}</label>
      <input type='text' placeholder='Password' id='password' />
      <label>{form.password.error}</label>
      <input type='text' placeholder='Confirm Password' id='passwordConfirmation' />
      <label>{form.passwordConfirmation.error}</label>
      <button id="submitFormBtn"> Submit </button>
  </form>
);
const mapStateToProps = (state) => ({form: state.form});
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
