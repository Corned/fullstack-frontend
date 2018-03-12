import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

/* Import reduces */

const reducer = combineReducers({

})

const store = createStore(
	reducer,
	applyMiddleware(thunk)
)

export default store