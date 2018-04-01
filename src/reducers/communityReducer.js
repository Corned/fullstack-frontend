import communityService from "../services/communityService"

const reducer = (state = [], action) => {
	switch(action.type) {
	case "INIT_COMMUNITY":
		return action.data
	case "NEW_COMMUNITY":
		return [ ...state, action.data ]
	default:
		return state
	}
}

export const getAllCommunities = () => {
	return async (dispatch) => {
		const communities = await communityService.getAll()
		dispatch({
			type: "INIT_COMMUNITY",
			data: communities
		})
	}
} 

export default reducer