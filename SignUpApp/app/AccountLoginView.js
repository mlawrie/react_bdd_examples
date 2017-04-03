import React from 'react';
import { connect } from 'react-redux';

import { SignUpFormContainer } from './SignUpForm';

const SignUpBtn = ({showSignForm}) => (
  <button id="showFormBtn" onClick={showSignForm}> Sign Up </button>
);

const AccountLogin = ({ formVisible, toggleVisibilty }) => (
  <div>
    <h2>Sign Up App</h2>
    {formVisible ? <SignUpFormContainer />  : <SignUpBtn showSignForm={toggleVisibilty}/>}
  </div>
);

const mapStateToProps = (state) => ({ formVisible: state.formVisible });
const mapDispatchToProps = (dispatch) => ({ toggleVisibilty:  () => dispatch({ type: 'form/visible' }) });
export const AccountLoginContainer = connect(mapStateToProps, mapDispatchToProps)(AccountLogin);