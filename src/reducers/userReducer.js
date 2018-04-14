import userService from "../services/postService"

const initialState = {
	userList: [],
	user: null
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

export const getUserByUsername = (username) => {
	return async (dispatch) => {
		const user = await userService.getByUsername(username)

		dispatch({
			type: "SET_USER",
			user
		})
	}
}

export const getAllUsers = () => {
	return async (dispatch) => {
		const users = await userService.getAll()
		
		dispatch({
			type: "INIT_USERS",
			postList: users
		})
	}
}

export default reducer