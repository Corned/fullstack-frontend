import postService from "../services/post"

const reducer = (store = [], action) => {
	switch(action.type) {
	case "INIT_POSTS":
		return action.data
	case "NEW_POST":
		return [ ...store, action.data ]
	default:
		return store
	}
}

export const postInit = () => {
	return async (dispatch) => {
		const posts = await postService.getAll()
		dispatch({
			type: "INIT_POSTS",
			data: posts
		})
	}
}

export const postsFromCommunity = (communityName) => {
	return async (dispatch) => {
		const posts = await postService.getAllFromCommunity(communityName)
		dispatch({
			type: "INIT_POSTS",
			data: posts
		})
	}
}

export default reducer