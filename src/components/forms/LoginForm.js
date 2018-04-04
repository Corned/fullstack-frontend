import React from "react"

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

export default LoginForm



