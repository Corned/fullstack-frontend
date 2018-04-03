import communityService from "../services/communityService"


const reducer = (state = null, action) => {
	switch(action.type) {
	case "COMMUNITY_BY_NAME":
		return action.data
	default:
		return state
	}
}

export const getCommunityByName = (name) => {
	return async (dispatch) => {
		const community = await communityService.getByName(name)
		dispatch({
			type: "COMMUNITY_BY_NAME",
			data: community
		})
	}
} 

export default reducer