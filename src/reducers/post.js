import postService from "../services/post"

const initialState = {
	from: null,
	sortBy: "date",
	data: []
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "INIT_POSTS":
			return {
				from: action.from,
				sortBy: state.sortBy,
				data: action.data
			}

		case "NEW_POST":
			return {
				from: state.from,
				sortBy: state.sortBy,
				data: [ ...state.data, action.data ]
			}

		default:
			return state
	}
}

export const getAllPosts = () => {
	return async (dispatch) => {
		const posts = await postService.getAll()
		posts.sort((a, b) => {
			const timeA = new Date(a.date).getTime()
			const timeB = new Date(b.date).getTime()
			return timeA < timeB
		})
		
		dispatch({
			type: "INIT_POSTS",
			from: null,
			data: posts
		})
	}
}

export const getAllPostsFromCommunity = (communityName) => {
	return async (dispatch) => {
		const posts = await postService.getAllFromCommunity(communityName)
		posts.sort((a, b) => {
			const timeA = new Date(a.date).getTime()
			const timeB = new Date(b.date).getTime()
			return timeA < timeB
		})

		dispatch({
			type: "INIT_POSTS",
			from: communityName,
			data: posts
		})
	}
}

export default reducer