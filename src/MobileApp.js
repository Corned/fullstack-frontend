import React from "react"
import { connect } from "react-redux"

import "./index.css"

class App extends React.Component {
	componentWillMount() {
	}

	render() {
		return (
			<div>
				<div className="frame drop-shadow" style={{"marginTop": "auto", "marginBottom": "1em"}}>
					<p>This site isn't optimised for mobile yet!</p>
				</div>
				<div className="frame drop-shadow">
					<p>Please come back later!</p>
				</div>
			</div>
		)
	}
}

export default connect(null, null)(App)
