import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	render() {
		return (
			<div>
				{this.props.surveys.reverse().map(survey => {
					return (
						<div
							key={survey._id}
							className="card blue-grey darken-1"
						>
							<div className="card-content">
								<span className="card-title">
									{survey.title}
									<p>{survey.body}</p>
									<p className="right">
										Sent On :{" "}
										{new Date(
											survey.dateSent
										).toLocaleDateString()}
									</p>
								</span>
							</div>
							<div className="card-action">
								<a>Yes : {survey.yes} </a>
								<a>No : {survey.no} </a>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
