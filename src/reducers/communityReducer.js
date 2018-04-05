import communityService from "../services/communityService"

const initialState = {
	current: null,
	list: []
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
	case "SET_COMMUNITY":
		return {
			current: action.data,
			list: state.list
		}
	default:
		return state
	}
}

export const getCommunityByName = (name) => {
	return async (dispatch) => {
		const community = await communityService.getByName(name)
		dispatch({
			type: "SET_COMMUNITY",
			data: community
		})
	}
} 

export const nullCommunity = () => {
	return async (dispatch) => {
		dispatch({
			type: "SET_COMMUNITY",
			data: null
		})
	}
}

export default reducer