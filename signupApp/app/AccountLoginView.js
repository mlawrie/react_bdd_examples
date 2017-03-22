import React from 'react'
import { connect } from 'react-redux'

const LoginBtn = ({showLoginForm}) => (<button onClick={showLoginForm}>Login</button>);
const LoginForm = () => (
  <div>
    <input class="input" type='text' placeholder='Username' id='username' />
    <input class="input" type='text' placeholder='Password' id='password' />
    <button class="btn" >Submit</button>
  </div>
);

const AccountLoginView = ({ loginFormVisible, toggleVisibilty }) => (
  <div class="container-fluid">
    <h1>LoginApp</h1>
    {loginFormVisible ? <LoginForm />  : <LoginBtn showLoginForm={toggleVisibilty}/>}
  </div>
)

const mapStateToProps = (state) => ({ 
  loginFormVisible: state.loginFormVisible 
})

const mapDispatchToProps = (dispatch) => ({ 
  toggleVisibilty:  () => {
    dispatch({ type: 'LOGIN_FORM_VISIBLE' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountLoginView);
