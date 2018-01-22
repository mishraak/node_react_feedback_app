import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';


//const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
//const Landing = () => <h2>Landing</h2>;

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