import commentService from "../services/commentService"

const initialState = {
	current: null,
	list: []
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "INIT_COMMENTS":
			return {
				list: action.data
			}
		case "NEW_COMMENT":
			return {
				list: state.data
			}
		default:
			return state
	}
}

export const getCommentById = (id) => {
	return async (dispatch) => {
		const comment = await commentService.getCommentById(id)

		dispatch({
			type: "SET_POST",
			data: comment
		})
	}
}

export const createComment = (data, token) => {
	return async (dispatch) => {
		const comment = await commentService.createComment(data, token)

		dispatch({
			type: "NEW_POST",
			data: comment
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
			type: "INIT_COMMENTS",
			data: []
		})
	}
}

export default reducer