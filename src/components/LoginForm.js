import React from "react"
import { connect } from "react-redux"

import loginService from "../services/loginService"
import { login, logout } from "../reducers/loggedUserReducer"

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
		if (this.props.loggedUser) {
			return null
		}
		
		return (
			<form id="login-form" className="frame drop-shadow" onSubmit={this.login}>
				<input 
					type="text" 
					name="username" 
					placeholder="username"
					value={this.state.username}
					autoComplete="off"
					onChange={this.textFieldHandler}
				/>
				<input 
					type="password" 
					name="password" 
					placeholder="password"
					value={this.state.password}
					autoComplete="off"
					onChange={this.textFieldHandler}
				/>
				<button type="submit">Log in!</button>
			</form>
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
