import React from "react"

import { connect } from "react-redux"
import { withRouter, Redirect } from 'react-router-dom'
import userService from "../../services/userService"
import loginService from "../../services/loginService"
import queryString from "query-string"
import { login } from "../../reducers/loggedUserReducer"

class RegistrationForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			username: "",
			password: "",
			passwordAgain: ""
		}
	}

	textFieldHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	submit = async (event) => {
		event.preventDefault()

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
		return (
			<form onSubmit={this.submit} id="register" className="frame">
				<h1>Register</h1>
				<p className="error">{this.state.error}</p>
				<input 
					className=""
					type="text" 
					name="username" 
					placeholder="Username"
					value={this.state.username}
					autoComplete="off"
					onChange={this.textFieldHandler}
				/>
				<input 
					className={this.state.password === this.state.passwordAgain ? "invalid" : ""}
					type="password" 
					name="password" 
					placeholder="Password"
					value={this.state.password}
					autoComplete="off"
					onChange={this.textFieldHandler}
				/>
				<input 
					className={this.state.password === this.state.passwordAgain ? "invalid" : ""}
					type="password" 
					name="passwordAgain" 
					placeholder="Repeat password"
					value={this.state.passwordAgain}
					autoComplete="off"
					onChange={this.textFieldHandler}
				/>
				<button 
					type="submit"
				>Register</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegistrationForm))


