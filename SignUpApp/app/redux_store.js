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

const FORM_UPDATE = 'form/update';

const defaultFormState = {
	name: { value: '', error: '' },
	email: { value: '', error: '' }, 
	password: { value: '', error: '' }, 
	passwordConfirmation: { value: '', error: '' }, 
}

const signUpFormReducer = (state = defaultFormState, action) => {
	switch(action.type){
		case FORM_UPDATE:
			return Object.assign({}, state, action.formField)
	}
	return state;
}

export default createStore(combineReducers({
	formVisible: signUpReducer,
	form: signUpFormReducer
}));