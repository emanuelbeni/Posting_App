import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_POST,
	FETCH_POST,
	FETCH_POSTS,
	EDIT_POST,
	DELETE_POST
} from "./ActionTypes";
import posts from "../apis/posts";
import history from "../history";

//Auth action creators
export const signIn = userId => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

//Create post action
export const createPost = formValues => {
	return async (dispatch, getState) => {
		const { userId } = getState().auth;
		const formValueswithId = { ...formValues, userId };
		const response = await posts.post("/posts", formValueswithId);

		dispatch({ type: CREATE_POST, payload: response.data });
		history.push("/posts");
	};
};

//Fetch Post(s)
export const fetchPosts = () => {
	return async dispatch => {
		const response = await posts.get("/posts");
		dispatch({ type: FETCH_POSTS, payload: response.data });
	};
};

export const fetchPost = id => {
	return async dispatch => {
		const response = await posts.get(`/posts/${id}`);
		dispatch({ type: FETCH_POST, payload: response.data });
	};
};

//Edit post
export const editPost = (id, formValues) => {
	return async dispatch => {
		const response = await posts.patch(`/posts/${id}`, formValues);
		dispatch({ type: EDIT_POST, payload: response.data });
		history.push("/posts");
	};
};

export const deletePost = id => {
	return async dispatch => {
		await posts.delete(`/posts/${id}`);
		dispatch({ type: DELETE_POST, payload: id });
		history.push("/posts");
	};
};
