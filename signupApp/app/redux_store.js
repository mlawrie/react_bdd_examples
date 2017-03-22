import { createStore } from 'redux'

const FORM_VISIBLE = 'form/visible';

const loginReducers = (state = { formVisible: false }, action) => {
	switch (action.type) {
		case FORM_VISIBLE:
			return { formVisible : true };
		default: 
			return state;
	}
}

export default createStore(loginReducers);