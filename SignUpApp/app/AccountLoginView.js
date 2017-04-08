import React from 'react';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';

const SignUpBtn = ({showSignForm}) => (
  <button id="showFormBtn" onClick={showSignForm}> Sign Up </button>
);

const AccountLogin = ({ formVisible, toggleVisibilty }) => (
  <div>
    <h2>Sign Up App</h2>
    {formVisible ? <SignUpForm />  : <SignUpBtn showSignForm={toggleVisibilty}/>}
  </div>
);

const mapStateToProps = (state) => ({ formVisible: state.formVisible });
const mapDispatchToProps = (dispatch) => ({ toggleVisibilty:  () => dispatch({ type: 'form/visible' }) });
export default connect(mapStateToProps, mapDispatchToProps)(AccountLogin);
