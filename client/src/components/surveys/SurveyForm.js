//surveyForm shows a form for a user to add input

import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import _ from "lodash";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => {
			return (
				<Field
					key={name}
					component={SurveyField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit(values =>
						this.props.onSurveySubmit()
					)}
				>
					{this.renderFields()}

					<Link to="/surveys" className="teal btn-flat white-text">
						Cancel
					</Link>

					<button
						type="submit"
						className="teal btn-flat right white-text"
					>
						Submit
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	errors.emails = validateEmails(values.recipients || "");

	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = "You must provide a value!";
		}
	});
	return errors;
}

export default reduxForm({
	validate: validate,
	destroyOnUnmount: false,
	form: "surveyForm"
})(SurveyForm);

/*

	<Field 
							type="text"
							name="surveyTitle"
							component="input"
						/>

*/
