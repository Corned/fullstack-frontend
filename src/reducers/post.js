import postService from "../services/post"

const initialState = {
	community: null,
	sortBy: "date",
	posts: []
}

const reducer = (state = [], action) => {
	switch(action.type) {
	case "INIT_POSTS":
		return action.data
	case "NEW_POST":
		return [ ...state, action.data ]
	default:
		return state
	}
}

export const postInit = () => {
	return async (dispatch) => {
		const posts = await postService.getAll()
		posts.sort((a, b) => {
			const timeA = new Date(a.date).getTime()
			const timeB = new Date(b.date).getTime()
			return timeA < timeB
		})
		
		dispatch({
			type: "INIT_POSTS",
			data: posts
		})
	}
}

export const postsFromCommunity = (communityName) => {
	return async (dispatch) => {
		const posts = await postService.getAllFromCommunity(communityName)
		posts.sort((a, b) => {
			const timeA = new Date(a.date).getTime()
			const timeB = new Date(b.date).getTime()
			return timeA < timeB
		})

		dispatch({
			type: "INIT_POSTS",
			data: posts
		})
	}
}

export default reducer