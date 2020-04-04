import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "./css/PostForm.css";

export class PostForm extends Component {
	renderInput = ({ input, label, placeholder, meta }) => {
		const classNameInput = `form-control ${
			meta.error && meta.touched ? "is-invalid" : ""
		}`;

		return (
			<div className='form-group'>
				<label>{label}</label>
				<input
					{...input}
					className={classNameInput}
					placeholder={placeholder}
				></input>
				{this.renderError(meta)}
			</div>
		);
	};

	renderError = meta => {
		const { error, touched } = meta;

		if (error && touched) {
			return <div className='alert alert-danger mt-2'>{error}</div>;
		}
	};

	//Handle callabck function
	onSubmit = formValues => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<div className='container'>
				<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field
						name='title'
						component={this.renderInput}
						label='Enter Title'
						placeholder='Title'
					></Field>
					<Field
						name='body'
						component={this.renderInput}
						label='Enter Message'
						placeholder='Message'
					></Field>
					<button className='btn btn-primary'>Submit</button>
				</form>
			</div>
		);
	}
}

const validate = formValues => {
	var errors = {};

	if (!formValues.title) {
		errors.title = "Please enter title";
	}
	if (!formValues.body) {
		errors.body = "Please enter message";
	}

	return errors;
};

export default reduxForm({ form: "postForm", validate: validate })(PostForm);
