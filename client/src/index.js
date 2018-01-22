import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';




const store = createStore(reducers, {}, applyMiddleware(reduxThunk) );

ReactDOM.render(
	<Provider store= { store } >
		<App />
	</Provider>,
	document.querySelector('#root')
);

//console.log('strip key is :' + process.env.REACT_APP_STRIPE_KEY);
//console.log('Env is :' + process.env.NODE_ENV);