import React from "react"
import { connect } from "react-redux"
import { withRouter, Redirect } from 'react-router-dom'

import { login } from "../../reducers/loggedUserReducer"
import loginService from "../../services/loginService"

import queryString from "query-string"

class LoginForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			username: "",
			password: "",
			error: ""
		}
	}

	textFieldHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	submit = async (event) => {
		event.preventDefault()

		try {
			const user = await loginService.login({
				username: this.state.username,
				password: this.state.password
			})

			const parsed = queryString.parse(this.props.history.location.search)

			this.props.history.push(parsed.redirect || "/")
			this.props.login(user)
		} catch (error) {
			this.setState({ error: error.response.data.error })
		}
	}

	render() {
		if (this.props.loggedUser) {
			const parsed = queryString.parse(this.props.history.location.search)
			return <Redirect to={parsed.redirect || "/"}/>
		}

		return (
			<form onSubmit={this.submit} id="login" className="card background-white">
				<h1>Login</h1>
				<p className="error">{this.state.error}</p>
				<input 
					className={this.state.error !== "" ? "invalid" : ""}
					type="text" 
					name="username" 
					placeholder="Username"
					value={this.state.username}
					autoComplete="off"
					onChange={this.textFieldHandler}
				/>
				<input 
					className={this.state.error}
					type="password" 
					name="password" 
					placeholder="Password"
					value={this.state.password}
					autoComplete="off"
					onChange={this.textFieldHandler}
				/>
				<button 
					type="submit"
				>Log in</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm))




