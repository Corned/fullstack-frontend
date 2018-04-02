const initialState = {
	location: null,
	sort: null,
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "SET_LOCATION":
			return {
				location: action.location,
				sort: state.sort
			}
		case "SET_SORT":
			return {
				location: state.location,
				sort: action.sort
			}
		default:
			return state
		}
}

export const setLocation = (location) => {
	return async (dispatch) => {
		dispatch({
			type: "SET_LOCATION",
			location
		})
	}
} 

export const setSort = (sort) => {
	return async (dispatch) => {
		dispatch({
			type: "SET_SORT",
			sort
		})
	}
}

export default reducer