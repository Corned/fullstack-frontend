import React from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'

import { login } from "../../reducers/loggedUserReducer"


class LoginForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			username: "",
			password: ""
		}
	}

	textFieldHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	submit = (event) => {
		event.preventDefault()

		console.log(this.state)

		this.props.login({
			username: this.state.username,
			password: this.state.password
		})
	}


	render() {
		return (
			<div id="login-page frame">
				<form onSubmit={this.submit} id="login" className="frame">
					<h1>Login</h1>
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
						className=""
						type="password" 
						name="password" 
						placeholder="Password"
						value={this.state.password}
						autoComplete="off"
						onChange={this.textFieldHandler}
					/>
					<button 
						type="submit"
					>Submit</button>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = { login }

export default connect(null, mapDispatchToProps)(withRouter(LoginForm))




