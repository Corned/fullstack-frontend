import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import communityReducer from "./reducers/communityReducer"
import loggedUserReducer from "./reducers/loggedUserReducer"
import postReducer from "./reducers/postReducer"
import userReducer from "./reducers/userReducer"

const reducer = combineReducers({
	communityData: communityReducer,
	loggedUserData: loggedUserReducer,
	postData: postReducer,
	userData: userReducer,
})

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
)

export default store