import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./PostReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
	auth: AuthReducer,
	form: formReducer,
	posts: PostsReducer
});
