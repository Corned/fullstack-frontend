const reducer = (state = "", action) => {
	switch(action.type) {
		case "SEARCH":
			return action.data
		default:
			return state
	}
}

export const search = (query) => {
	return async (dispatch) => {		
		dispatch({
			type: "SEARCH",
			data: posts
		})
	}
}

export default reducer