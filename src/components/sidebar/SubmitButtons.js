import React from "react"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

const SubmitButtons = (props) => {	
	if (props.loggedUser === null) {
		return null
	}

	const navigateTo = (to) => {
		return () => {
			if (props.history.location.pathname !== to) {
				//props.history.push(to)
			}
		}
	}
	
	return (
		<div id="submit-buttons" className="frame drop-shadow">
			<Link to="/submit">Submit Text</Link>
		</div>
	)

}

const mapStateToProps = (state) => {
	return {
		"loggedUser": state.loggedUser
	}
}

export default connect(mapStateToProps, null)(withRouter(SubmitButtons))