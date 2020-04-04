import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../Reducers";
import { Provider } from "react-redux";
import Home from "../Components/Home";
import CreatePost from "../Components/CreatePost";
import MyPosts from "../Components/MyPosts";
import Navigation from "../Components/Navigation";
import EditPost from "../Components/EditPost";
import history from "../history";
import Auth from "../Components/Auth";
import DeletePost from "../Components/DeletePost";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk))
);

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Router history={history}>
					<Navigation />
					<div>
						<Switch>
							<Route path='/' exact component={Auth} />
							<Route path='/posts' exact component={MyPosts} />
							<Route path='/posts/createPost' component={CreatePost} />
							<Route path='/posts/edit/:id' component={EditPost} />
							<Route path='/posts/delete/:id' component={DeletePost} />
						</Switch>
					</div>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
