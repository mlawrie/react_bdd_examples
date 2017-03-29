import { createStore } from 'redux'

const FORM_VISIBLE = 'form/visible';

const signUpReducer = (state = { formVisible: false }, action) => {
	switch (action.type) {
		case FORM_VISIBLE:
			return { formVisible : true };
		default: 
			return state;
	}
}

export default createStore(signUpReducer);