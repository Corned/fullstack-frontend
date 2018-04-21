import postService from "../services/postService"

const initialState = {
	current: null,
	list: []
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "INIT_POSTS":
			return {
				list: action.data,
				current: state.current
			}
		case "NEW_POST":
			return {
				list: [ ...state.list, action.data ],
				current: action.data
			}
		case "SET_POST":
			return {
				list: state.list,
				current: action.data
			}
		default:
			return state
	}
}

export const getPostById = (id) => {
	return async (dispatch) => {
		const post = await postService.getPostById(id)

		dispatch({
			type: "SET_POST",
			data: post
		})
	}
}

export const getAllPosts = () => {
	return async (dispatch) => {
		const posts = await postService.getAllPosts()
		
		dispatch({
			type: "INIT_POSTS",
			data: posts
		})
	}
}

export const getAllPostsByCommunity = (communityName) => {
	return async (dispatch) => {
		const posts = await postService.getAllPostsByCommunity(communityName)

		dispatch({
			type: "INIT_POSTS",
			data: posts
		})
	}
}

export const getAllPostsByUser = (username) => {
	return async (dispatch) => {
		const posts = await postService.getAllPostsByUser(username)

		dispatch({
			type: "INIT_POSTS",
			data: posts
		})
	}
}

export const createPost = (data, token) => {
	return async (dispatch) => {
		const post = await postService.createPost(data, token)

		dispatch({
			type: "NEW_POST",
			data: post
		})
	}
}

export const clearPost = () => {
	return async (dispatch) => {
		dispatch({
			type: "SET_POST",
			data: null
		})
	}
}

export const clearPosts = () => {
	return async (dispatch) => {
		dispatch({
			type: "INIT_POSTS",
			data: []
		})
	}
}

export default reducer