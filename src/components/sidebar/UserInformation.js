import React from "react"
import { connect } from "react-redux"

import { logout } from "../../reducers/loggedUser"

const UserInformation = (props) => {
	if (props.loggedUser === null) {
		return null
	}

	const logout = () => {
		props.logout()
	}

	return (
		<div id="user-information" className="frame drop-shadow">
			<button type="submit" onClick={logout}>Logout</button>
		</div>
	)
}


const mapStateToProps = (state) => {
	return {
		"loggedUser": state.loggedUser
	}
}

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation)
