import postService from "../services/postService"

const reducer = (state = [], action) => {
	switch(action.type) {
		case "INIT_POSTS":
			return action.data
		default:
			return state
	}
}

export const getAllPosts = () => {
	return async (dispatch) => {
		const posts = await postService.getAll()
		
		dispatch({
			type: "INIT_POSTS",
			data: posts
		})
	}
}

export const getAllPostsByCommunity = (communityName) => {
	return async (dispatch) => {
		const posts = await postService.getAllFromCommunity(communityName)

		dispatch({
			type: "INIT_POSTS",
			data: posts
		})
	}
}

export const createPost = (title, type, content) => {

}

export default reducer