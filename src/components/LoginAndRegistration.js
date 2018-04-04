import React from "react"
import { Redirect } from "react-router-dom"

class LoginAndRegistration extends React.Component {
/*	
	if (window.localStorage.getItem("loggedUser") === undefined) {
		return <Redirect to="/c/cordial"/>
	}
*/

	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		return (
			<div id="login-page frame">
				<form id="login" className="frame">
					<h1>Login</h1>
					<input placeholder="username"/>
					<input placeholder="password"/>
					<button>login</button>
				</form>
				<form id="register" className="frame">
					<h1>Register</h1>
					<input placeholder="username"/>
					<input placeholder="password"/>
					<input placeholder="password"/>
					<button>register</button>
				</form>
			</div>
		)
	}
}

export default LoginAndRegistration



