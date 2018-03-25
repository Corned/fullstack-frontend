import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

const SubmitButtons = (props) => {	
	if (props.loggedUser === null) {
		return null
	}

	const navigateTo = (to) => {
		return () => {
			if (props.history.location.pathname !== to) {
				props.history.push(to)
			}
		}
	}
	
	return (
		<div id="submit-buttons" className="frame drop-shadow">
			<button id="submit-link" onClick={navigateTo("/submit/link")}>Submit Link</button>
			<button id="submit-text" onClick={navigateTo("/submit/text")}>Submit Text</button>
			<button id="create-community" onClick={navigateTo("/submit/community")}>Create a Community</button>
		</div>
	)

}

const mapStateToProps = (state) => {
	return {
		"loggedUser": state.loggedUser
	}
}

export default connect(mapStateToProps, null)(withRouter(SubmitButtons))