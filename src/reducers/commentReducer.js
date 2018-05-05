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
				list: [ ...state.list, action.data ]
			}
		default:
			return state
	}
}


export const getCommentById = (id) => {
	return async (dispatch) => {
		const comment = await commentService.getCommentById(id)

		dispatch({
			type: "SET_COMMENT",
			data: comment
		})
	}
}

export const getCommentsByPostId = (id) => {
	return async (dispatch) => {
		const comments = await commentService.getCommentsByPostId(id)

		dispatch({
			type: "INIT_COMMENTS",
			data: comments
		})
	}
}

export const createComment = (data, token) => {
	return async (dispatch) => {
		if (data.parent) {
			data.parent = data.parent.id
		} else {
			data.parent = null
		}

		const comment = await commentService.createComment(data, token)

		dispatch({
			type: "NEW_COMMENT",
			data: comment
		})
	}
}

export const deleteComment = (id, token) => {
	return async (dispatch) => {
		await commentService.deleteComment(id, token)

		dispatch({
			type: "DELETE_COMMENT",
			data: id
		})
	}
}

export const clearComment = () => {
	return async (dispatch) => {
		dispatch({
			type: "SET_COMMENT",
			data: null
		})
	}
}

export const clearComments = () => {
	return async (dispatch) => {
		dispatch({
			type: "INIT_COMMENTS",
			data: []
		})
	}
}

export default reducer