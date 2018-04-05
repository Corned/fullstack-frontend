import postService from "../services/postService"

const initialState = {
	postList: [],
	post: null
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "INIT_POSTS":
			return {
				postList: action.postList,
				post: state.post
			}
		case "SET_POST":
			return {
				postList: [ ...state.postList, action.post ],
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
			type: "SET_POST",
			post
		})
	}
}

export const getAllPosts = () => {
	return async (dispatch) => {
		const posts = await postService.getAll()
		
		dispatch({
			type: "INIT_POSTS",
			postList: posts
		})
	}
}

export const getAllPostsByCommunity = (communityName) => {
	return async (dispatch) => {
		const posts = await postService.getAllFromCommunity(communityName)

		dispatch({
			type: "INIT_POSTS",
			postList: posts
		})
	}
}

export const createPost = (data, token) => {
	return async (dispatch) => {
		const post = await postService.create(data, token)

		dispatch({
			type: "SET_POST",
			post
		})
	}
}

/*

		if (body.community === undefined ) {
			return response.status(400).json({ error: "community missing" })
		} else if (body.title === undefined) {
			return response.status(400).json({ error: "title missing" })
		} else if (body.type === undefined) {
			return response.status(400).json({ error: "type missing" })
		} else if (body.type !== "link" && body.type !== "text") {
			return response.status(400).json({ error: "invalid body type" })
		} else if (body.type === "link" && body.url === undefined) {
			return response.status(400).json({ error: "url missing" })
		} else if (body.type === "text" && body.body === undefined) {
			return response.status(400).json({ error: "body missing" })
		}


*/

export default reducer