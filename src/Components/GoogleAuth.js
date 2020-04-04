import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../Actions";

export class GoogleAuth extends Component {
	componentDidMount = () => {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"30537256389-eso77t25d47ghtn4rnmvef1a5qm7vn54.apps.googleusercontent.com",
					scope: "email"
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	};

	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuth = () => {
		if (this.props.auth.isSignedIn) {
			return (
				<div className='btn btn-danger' onClick={this.onSignOutClick}>
					G-logout
				</div>
			);
		} else {
			return (
				<div className='btn btn-danger' onClick={this.onSignInClick}>
					G-login
				</div>
			);
		}
	};

	render() {
		return <div>{this.renderAuth()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
