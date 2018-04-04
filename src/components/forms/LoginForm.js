import React from "react"
import { connect } from "react-redux"
import { withRouter, Redirect } from 'react-router-dom'
import queryString from "query-string"

import { login } from "../../reducers/loggedUserReducer"
import loginService from "../../services/loginService"

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
		} catch (exception) {
			this.setState({ error: "invalid" })
		}
	}

	render() {
		if (this.props.userdata.user) {
			return <Redirect to="/c/cordial"/>
		}

		return (
			<form onSubmit={this.submit} id="login" className="frame">
				<h1>Login</h1>
				<input 
					className={this.state.error}
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
		"userdata": state.userdata
	}
}

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm))




