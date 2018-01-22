import axios from 'axios';
import { FETCH_USER }  from './types';


export const fetchUser = () => {
	return async function(dispatch) {				
		const res = await axios.get('/api/current_user');
		dispatch({ type: FETCH_USER, payload : res.data });
		
		//refactored now using async await syntax
		/*
			axios
				.get('/api/current_user')
				.then(res => dispatch({ type: FETCH_USER, payload : res }));
		*/

	};	
};

export const handleToken = (token) => {
	return async function(dispatch) {
		const res = await axios.post('/api/stripe', token);
		dispatch({type : FETCH_USER, payload : res.data});
	}
}