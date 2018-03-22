import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import communityReducer from "./reducers/community"
import postReducer from "./reducers/post"
import loggedUserReducer from "./reducers/loggedUser"

const reducer = combineReducers({
	communities: communityReducer,
	posts: postReducer,
	loggedUser: loggedUserReducer
})

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
)

export default store