import React from 'react'
import { connect } from 'react-redux'

const AccountLoginView = ({ loginFormVisible, toggleVisibilty }) => {
  const loginFormToggle = { display: loginFormVisible ? 'flex' : 'none' }
  const loginButtonToggle = { display: loginFormVisible ? 'none' : 'flex' }
  
  return <div style={styles.container}>
    <h1 style={styles.header}>LoginApp</h1>
    <button style={{...styles.button, ...loginButtonToggle}} onClick={toggleVisibilty}>Login</button>
    <div style={{...styles.container, ...loginFormToggle}}>
      <input style={{margin:10}} type='text' placeholder='Username' id='username' />
      <input type='text' placeholder='Password' id='password' />
      <button style={styles.button}>Submit</button>
    </div>
  </div>
}

const styles = {
  container: {
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'column',
    display: 'flex'
  }, 
  button: {
    margin: 15
  }
};

const mapStateToProps = (state) => ({ 
  loginFormVisible: state.loginFormVisible 
})

const mapDispatchToProps = (dispatch) => ({ 
  toggleVisibilty:  () => {
    dispatch({ type: 'LOGIN_FORM_VISIBLE' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountLoginView);