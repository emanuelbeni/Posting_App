import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import GoogleAuth from "./GoogleAuth";

export class Navigation extends React.Component {
	renderNavigation = () => {
		if (this.props.isSignedIn) {
			return (
				<>
					<Link to='/' className='nav-link'>
						Home
					</Link>
					<Link to='/posts' className='nav-link'>
						myPosts
					</Link>
					<Link to='/posts/createPost' className='nav-link'>
						AddPost
					</Link>
					<Link to='/' className='nav-link'>
						<GoogleAuth />
					</Link>
				</>
			);
		} else {
			return (
				<>
					<Link to='/' className='nav-link'>
						Home
					</Link>
					<Link to='/' className='nav-link'>
						<GoogleAuth />
					</Link>
				</>
			);
		}
	};

	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<a className='navbar-brand'>Brand</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto'>{this.renderNavigation()}</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => {
	return {
		isSignedIn: state.auth.isSignedIn
	};
};

export default connect(mapStateToProps, null)(Navigation);
