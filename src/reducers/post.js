import postService from "../services/post"

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

export const postInit = () => {
	return async (dispatch) => {
		const posts = await postService.getAll()
		dispatch({
			type: "INIT",
			data: posts
		})
	}
} 

export default reducer