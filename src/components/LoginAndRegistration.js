import React from "react"
import { Redirect } from "react-router-dom"

import LoginForm from "./forms/LoginForm"
import RegistrationForm from "./forms/RegistrationForm"

const LoginAndRegistration = () => {
	return (
		<div id="login-page frame">
			<LoginForm/>
			<RegistrationForm/>
		</div>
	)
}

export default LoginAndRegistration



