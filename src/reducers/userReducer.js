import userService from "../services/userService"

const initialState = {
	userList: [],
	user: null
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "INIT_USERS":
			return {
				userList: action.userList,
				user: state.user
			}
		case "SET_USER":
			return {
				userList: state.userList,
				user: action.user
			}
		default:
			return state
	}
}

export const getAllUsers = () => {
	return async (dispatch) => {
		const users = await userService.getAll()
		console.log(users)
		
		dispatch({
			type: "INIT_USERS",
			userList: users
		})
	}
}

export const getUserByUsername = (username) => {
	return async (dispatch) => {
		const user = await userService.getByUsername(username)

		dispatch({
			type: "SET_uSER",
			user
		})
	}
}

export default reducer