import loginService from "../services/loginService"

const reducer = (state = null, action) => {
	switch(action.type) {
	case "LOGIN":
		return action.data
	case "LOGOUT":
		return null
	default:
		return state
	}
}

export const login = (credentials) => {
	return async (dispatch) => {
		const user = await loginService.login(credentials)
		window.localStorage.setItem("loggedUser", JSON.stringify(user))

		dispatch({
			type: "LOGIN",
			data: user
		})
	}
}

export const logout = () => {
	return async (dispatch) => {
		window.localStorage.setItem("loggedUser", null)
		dispatch({
			type: "LOGOUT",
			data: null
		})
	}
}

export default reducer