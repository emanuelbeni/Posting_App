import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../Actions";
import { Link } from "react-router-dom";

//Prints out all of the posts
export class MyPosts extends Component {
	componentDidMount = () => {
		this.props.fetchPosts();
	};

	renderAdmin = (post, currentId) => {
		if (post.userId === currentId) {
			return (
				<>
					<button className='btn btn-primary m-2'>
						<Link to={`/posts/edit/${post.id}`} className='text-white'>
							Edit
						</Link>
					</button>
					<button className='btn btn-warning'>
						<Link to={`/posts/delete/${post.id}`} className='text-white'>
							Delete
						</Link>
					</button>
				</>
			);
		}
	};

	renderPosts = () => {
		if (!this.props.posts) {
			return <div>Loading...</div>;
		}
		return (
			<div className='container'>
				<h3>Posts</h3>
				{this.props.posts.map(post => {
					return (
						<div className='container border border-primary m-3' key={post.id}>
							<h5>{post.title}</h5>
							<p>{post.id}</p>
							<p>{post.body}</p>
							{this.renderAdmin(post, this.props.userId)}
						</div>
					);
				})}
			</div>
		);
	};

	render() {
		return this.renderPosts();
	}
}

const mapStateToProps = state => {
	return { posts: Object.values(state.posts), userId: state.auth.userId };
};

export default connect(mapStateToProps, { fetchPosts })(MyPosts);
