import React from "react"
import { connect } from "react-redux"

class App extends React.Component {
	render() {
		return (
			<div>
				<p>hello world</p>
			</div>
		)
	}
}

export default connect(null, null)(App)
