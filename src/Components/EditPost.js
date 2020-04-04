import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { editPost, fetchPost } from "../Actions";
import PostForm from "./PostForm";

class EditPost extends React.Component {
	componentDidMount() {
		this.props.fetchPost(this.props.match.params.id);
	}

	onSubmit = formValues => {
		this.props.editPost(this.props.match.params.id, formValues);
	};

	render = () => {
		if (!this.props.post) {
			return <div>Loading...</div>;
		}
		return (
			<div className='container'>
				<h3>Post Edit</h3>
				<PostForm
					onSubmit={this.onSubmit}
					initialValues={_.pick(this.props.post, "title", "body")}
				></PostForm>
			</div>
		);
	};
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	return { post: state.posts[id], auth: state.auth };
};

export default connect(mapStateToProps, { editPost, fetchPost })(EditPost);
