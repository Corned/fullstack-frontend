import loginService from "../services/loginService"

const initialState = {
	user: null,
	token: null
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
	case "LOGIN":
		return {
			user: action.user.user,
			token: action.user.token
		}
	case "LOGOUT":
		return initialState
	default:
		return state
	}
}

export const login = (user) => {
	return async (dispatch) => {
		window.localStorage.setItem("loggedUser", JSON.stringify(user))

		dispatch({
			type: "LOGIN",
			user
		})
	}
}

export const logout = () => {
	return async (dispatch) => {
		window.localStorage.setItem("loggedUser", null)
		dispatch({
			type: "LOGOUT"
		})
	}
}

export default reducer