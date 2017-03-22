import React from 'react'
import ReactDOM from 'react-dom'

import AccountLoginView from './AccountLoginView'
import { Provider } from 'react-redux'
import store from './redux_store'

ReactDOM.render(
	<Provider store={store}>
		<AccountLoginView/>
	</Provider>,
	document.getElementById('app')
)
