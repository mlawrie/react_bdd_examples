import React from 'react'
import ReactDOM from 'react-dom'

import LoginApp from './loginapp'
import { Provider } from 'react-redux'
import store from './redux_store'

ReactDOM.render(
	<Provider store={store}>
		<LoginApp/>
	</Provider>,
	document.getElementById('app')
)
