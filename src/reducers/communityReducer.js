import communityService from "../services/communityService"


const reducer = (state = null, action) => {
	switch(action.type) {
	case "SET_COMMUNITY":
		return action.data
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