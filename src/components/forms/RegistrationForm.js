import React from "react"
import { connect } from "react-redux"
import { withRouter, Redirect } from 'react-router-dom'

import { login } from "../../reducers/loggedUserReducer"
import userService from "../../services/userService"
import loginService from "../../services/loginService"

import queryString from "query-string"

class RegistrationForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			username: "",
			usernameTaken: false,

			password: "",
			passwordAgain: "",
			passwordAgainMismatch: false,
		}
	}

	usernameFieldHandler = async (event) => {
		const username = event.target.value.trim()
		this.setState({ username })

		if (username.length > 2) {
			try {
				await userService.getByUsername(username)
				this.setState({ "usernameTaken": true })
			} catch (exception) {
				// username not taken
				this.setState({ "usernameTaken": false })
			}
		}
	}

	passwordFieldHandler = (event) => {
		const password = event.target.value
		this.setState({ password, passwordAgainMismatch: !(password === this.state.passwordAgain) })
	}

	passwordAgainFieldHandler = (event) => {
		const passwordAgain = event.target.value
		this.setState({ passwordAgain, passwordAgainMismatch: !(passwordAgain === this.state.password) })
	}

	submit = async (event) => {
		event.preventDefault()

		if (this.state.passwordAgainMismatch === true) {
			return
		}

		try {
			await userService.create({
				username: this.state.username,
				password: this.state.password
			})

			const user = await loginService.login({
				username: this.state.username,
				password: this.state.password
			})

			const parsed = queryString.parse(this.props.history.location.search)

			this.props.history.push(parsed.redirect || "/")
			this.props.login(user)
		} catch (error) {
			if (error.response) {
				this.setState({ error: error.response.data.error })
			} else {
				this.setState({ error: "oh no" })
			}
		}
	}

	render() {
		if (this.props.loggedUser) {
			const parsed = queryString.parse(this.props.history.location.search)
			return <Redirect to={parsed.redirect || "/"}/>
		}
		
		return (
			<form onSubmit={this.submit} id="register" className="frame">
				<h1>Register</h1>
				<p className="error">{this.state.error}</p>
				<input 
					className={this.state.usernameTaken ? "invalid" : ""}
					type="text" 
					name="username" 
					placeholder="Username"
					value={this.state.username}
					autoComplete="off"
					onChange={this.usernameFieldHandler}
				/>
				<input 
					className={this.state.passwordAgainMismatch ? "invalid" : ""}
					type="password" 
					name="password" 
					placeholder="Password"
					value={this.state.password}
					autoComplete="off"
					onChange={this.passwordFieldHandler}
				/>
				<input 
					className={this.state.passwordAgainMismatch ? "invalid" : ""}
					type="password" 
					name="passwordAgain" 
					placeholder="Repeat password"
					value={this.state.passwordAgain}
					autoComplete="off"
					onChange={this.passwordAgainFieldHandler}
				/>
				<button 
					className={(this.state.passwordAgainMismatch || this.state.usernameTaken) ? "disabled" : ""}
					type="submit"
				>Register</button>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		"loggedUser": state.loggedUserData.user
	}
}

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegistrationForm))


