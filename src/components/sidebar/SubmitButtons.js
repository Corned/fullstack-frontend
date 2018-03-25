import React from "react"
import { withRouter } from "react-router-dom"

class SubmitButtons extends React.Component {
	navigateTo = (to) => {
		return () => {
			if (this.props.history.location.pathname !== to) {
				this.props.history.push(to)
			}
		}
	}
	
	render() {
		return (
			<div id="submit-selector" className="frame drop-shadow">
				<button id="submit-link" onClick={this.navigateTo("/submit/link")}>Submit Link</button>
				<button id="submit-text" onClick={this.navigateTo("/submit/text")}>Submit Text</button>
				<button id="create-community" onClick={this.navigateTo("/submit/community")}>Create a Community</button>
			</div>
		)
	}

}

export default withRouter(SubmitButtons)