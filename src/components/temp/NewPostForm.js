import React from "react"
import { connect } from "react-redux"

import { login, logout } from "../reducers/loggedUser"

class CreateCommunity extends React.Component {
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

	render() {		
		return (
			<form id="login-form" className="frame drop-shadow" onSubmit={this.login}>
				<input 
				/>
				<input 
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommunity)
