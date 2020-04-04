import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../Actions";
import PostForm from "./PostForm";

export class CreatePost extends Component {
	onSubmit = formValues => {
		console.log("Form values submitted to action creator");
		this.props.createPost(formValues);
	};

	render() {
		return (
			<div className='container'>
				<h3>Create Post</h3>
				<PostForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createPost })(CreatePost);
