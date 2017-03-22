import { createStore } from 'redux'

const loginReducers = (state = { loginFormVisible: false }, action) => {
	if(action.type === 'LOGIN_FORM_VISIBLE'){
		return { loginFormVisible : true };
	}
	return state;
}

export default createStore(loginReducers);