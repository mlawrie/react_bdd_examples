const React = require('react')
const { connect } = require('react-redux')

const SignUpBtn = ({showSignForm}) => (<button onClick={showSignForm}> Sign Up </button>);
const SignUpForm = () => (
  <form>
      <input type='text' placeholder='Name' id='name' />
      <input type='text' placeholder='Email' id='email' />
      <input type='text' placeholder='Password' id='password' />
      <input type='text' placeholder='Confirm Password' id='passwordConfirmation' />
      <button> Submit </button>
  </form>
);

const AccountLoginView = ({ formVisible, toggleVisibilty }) => (
  <div>
    <h2>Sign Up App</h2>
    {formVisible ? <SignUpForm />  : <SignUpBtn showSignForm={toggleVisibilty}/>}
  </div>
);

const mapStateToProps = (state) => ({ formVisible: state.formVisible });
const mapDispatchToProps = (dispatch) => ({ toggleVisibilty:  () => dispatch({ type: 'form/visible' }) });
export default connect(mapStateToProps, mapDispatchToProps)(AccountLoginView);