import communityService from "../services/community"

const reducer = (store = [], action) => {
	switch(action.type) {
	case "INIT":
		return action.data
	case "NEW":
		return [ ...store, action.data ]
	default:
		return store
	}
}

export const communityInit = () => {
	return async (dispatch) => {
		const communities = await communityService.getAll()
		dispatch({
			type: "INIT",
			data: communities
		})
	}
} 

export const communityNew = (name, user) => {
	return async (dispatch) => {
		const newCommunity = await communityService.create(name, user)
		dispatch({
			type: "NEW",
			data: newCommunity
		})
	}
}

export default reducer