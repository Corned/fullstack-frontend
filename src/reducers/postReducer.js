import postService from "../services/postService"

const initialState = {
	postList: [],
	post: null
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "INIT_USERS":
			return {
				postList: action.postList,
				post: state.post
			}
		case "SET_USER":
			return {
				postList: state.postList,
				post: action.post
			}
		default:
			return state
	}
}

export const getPostById = (id) => {
	return async (dispatch) => {
		const post = await postService.getById(id)

		dispatch({
			type: "SET_USER",
			post
		})
	}
}

export const getAllPosts = () => {
	return async (dispatch) => {
		const posts = await postService.getAll()
		
		dispatch({
			type: "INIT_USERS",
			postList: posts
		})
	}
}

export const getAllPostsByCommunity = (communityName) => {
	return async (dispatch) => {
		const posts = await postService.getAllFromCommunity(communityName)

		dispatch({
			type: "INIT_USERS",
			postList: posts
		})
	}
}

export const nullPost = () => {
	return async (dispatch) => {
		dispatch({
			type: "SET_USER",
			post: null
		})
	}
}

export const createPost = (data, token) => {
	return async (dispatch) => {
		const post = await postService.create(data, token)

		dispatch({
			type: "SET_USER",
			post
		})
	}
}

export default reducer