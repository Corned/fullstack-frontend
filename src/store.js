import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import communityReducer from "./reducers/communityReducer"
import postReducer from "./reducers/postReducer"
import loggedUserReducer from "./reducers/loggedUserReducer"

const reducer = combineReducers({
	community: communityReducer,
	posts: postReducer,
	userdata: loggedUserReducer
})

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
)

export default store