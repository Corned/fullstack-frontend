import userService from "../services/userService"

const initialState = {
	current: null,
	list: []
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "INIT_USERS":
			return {
				list: action.data,
				current: state.current
			}
		case "SET_USER":
			return {
				list: state.list,
				current: action.data
			}
		default:
			return state
	}
}

export const getAllUsers = () => {
	return async (dispatch) => {
		const users = await userService.getAll()
		
		dispatch({
			type: "INIT_USERS",
			data: users
		})
	}
}

export const getUserByUsername = (username) => {
	return async (dispatch) => {
		const current = await userService.getByUsername(username)

		dispatch({
			type: "SET_USER",
			data: current
		})
	}
}

export default reducer