import communityService from "../services/communityService"

const initialState = {
	current: null,
	communityList: []
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "INIT_COMMUNITIES":
			return {
				current: state.current,
				communityList: action.data
			}
		case "SET_COMMUNITY":
			return {
				current: action.data,
				communityList: state.communityList
			}
		default:
			return state
	}
}

export const getAllCommunities = () => {
	return async (dispatch) => {
		const communities = await communityService.getAll()
		dispatch({
			type: "INIT_COMMUNITIES",
			data: communities
		})
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

export default reducer