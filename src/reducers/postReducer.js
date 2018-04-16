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
		const post = await postService.getById(id)

		dispatch({
			type: "SET_POST",
			data: post
		})
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

export const createPost = (data, token) => {
	return async (dispatch) => {
		const post = await postService.create(data, token)

		dispatch({
			type: "NEW_POST",
			data: post
		})
	}
}

export default reducer