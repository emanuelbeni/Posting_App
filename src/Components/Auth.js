import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../Actions";

export class Auth extends Component {
	componentDidMount() {
		this.props.fetchPosts();
		console.log(this.props);
	}

	render() {
		return <div>auth</div>;
	}
}

const mapStateToProps = state => {
	return { posts: Object.values(state.posts) };
};

export default connect(mapStateToProps, { fetchPosts })(Auth);
