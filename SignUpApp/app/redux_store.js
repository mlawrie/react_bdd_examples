import { createStore, combineReducers } from 'redux'

const FORM_VISIBLE = 'form/visible';

const signUpReducer = (state = false, action) => {
	switch (action.type) {
		case FORM_VISIBLE:
			return true;
		default: 
			return state;
	}
}

const defaultFormState = {
	name: { value: '', error: 'Missing Name' },
	email: { value: '', error: '' }, 
	password: { value: '', error: '' }, 
	passwordConfirmation: { value: '', error: '' }, 
}

const signUpFormReducer = (state = defaultFormState, action) => {
	return state;
}

export default createStore(combineReducers({
	formVisible: signUpReducer,
	form: signUpFormReducer
}));