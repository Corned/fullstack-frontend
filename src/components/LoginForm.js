import React from "react"
import loginService from "../services/login"
import { connect } from "react-redux"

import { login, logout } from "../reducers/loggedUser"

class LoginForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			password: ""
		}
	}

	login = async (event) => {
		event.preventDefault()
		try {
			const user = await loginService.login({
				username: this.state.username,
				password: this.state.password
			})

			this.props.login(user)
			this.setState({
				username: "",
				password: ""
			})
		} catch (exception) {
			this.setState({
				password: ""
			})
			console.log(exception)
		}
	}

	textFieldHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		return (
			<div>
				<form id="login-form" onSubmit={this.login}>
					<input 
						type="text" 
						name="username" 
						placeholder="username"
						autoComplete="off"
						onChange={this.textFieldHandler}
					/>
					<input 
						type="password" 
						name="password" 
						placeholder="password"
						autoComplete="off"
						onChange={this.textFieldHandler}
					/>
					<button type="submit">Log in!</button>
				</form>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		"loggedUser": state.loggedUser
	}
}

const mapDispatchToProps = { login, logout }

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
