import {
	CREATE_POST,
	FETCH_POSTS,
	FETCH_POST,
	EDIT_POST,
	DELETE_POST
} from "../Actions/ActionTypes";
import _ from "lodash";

const INITIAL_STATE = { state: {} };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CREATE_POST:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_POSTS:
			return { ...state, ..._.mapKeys(action.payload, "id") };
		case FETCH_POST:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_POST:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_POST:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
