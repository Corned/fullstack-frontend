const reducer = (store = null, action) => {
	switch(action.type) {
	case "LOGIN":
		return action.data
	case "LOGOUT":
		return null
	default:
		return store
	}
}

export const login = (user) => {
	window.localStorage.setItem("loggedUser", JSON.stringify(user))
	return async (dispatch) => {
		dispatch({
			type: "LOGIN",
			data: user
		})
	}
}

export const logout = () => {
	window.localStorage.setItem("loggedUser", null)
	return async (dispatch) => {
		dispatch({
			type: "LOGOUT",
			data: null
		})
	}
}

export default reducer