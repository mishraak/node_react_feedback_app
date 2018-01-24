import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


class App extends Component {
	
	componentDidMount(){
		this.props.fetchUser();
	}

	render() {
		return(
			<div>
				<BrowserRouter> 
					<div>
						<Header />
						<Route exact={true} path='/'  component={Landing} />  
						<Route exact={true} path='/surveys'  component={Dashboard} />					
						<Route path='/surveys/new'  component={SurveyNew} />						
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions) (App);