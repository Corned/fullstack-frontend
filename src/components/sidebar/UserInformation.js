import React from "react"
import { connect } from "react-redux"

import { logout } from "../../reducers/loggedUser"

const UserInformation = (props) => {
	console.log(props.loggedUser)

	return (
		<div id="user-information" className="frame drop-shadow">
			<form>
				<button type="submit">Logout</button>
			</form>
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
