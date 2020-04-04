import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost, fetchPost } from "../Actions";

export class DeletePost extends Component {
	componentDidMount() {
		this.props.fetchPost(this.props.match.params.id);
	}

	handleDelete = () => {
		this.props.deletePost(this.props.match.params.id);
	};

	render() {
		if (!this.props.post) {
			return <div className='container'>Loading...</div>;
		}
		return (
			<div className='container'>
				Are you sure you want to delete this posts? {this.props.post.title}
				<button className='btn btn-warning' onClick={this.handleDelete}>
					Delete
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	return {
		post: state.posts[id]
	};
};

export default connect(mapStateToProps, { deletePost, fetchPost })(DeletePost);
