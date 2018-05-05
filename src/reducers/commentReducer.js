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
		console.table(data)
		if (data.parent) {
			data.parent = data.parent.id
		} else {
			data.parent = null
		}

		console.table(data)
		const comment = await commentService.createComment(data, token)

		dispatch({
			type: "NEW_COMMENT",
			data: comment
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

export const clearPost = () => {
	return async (dispatch) => {
		dispatch({
			type: "INIT_COMMENTS",
			data: []
		})
	}
}

export default reducer