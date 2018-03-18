import React from "react"
import { connect } from "react-redux"

import Communities from "./components/Communities"
import CommunityNavigation from "./components/CommunityNavigation"

import { communityInit } from "./reducers/community"

import "./index.css"

class App extends React.Component {
	componentWillMount() {
		this.props.communityInit()
	}

	render() {
		return (
			<div>
				<div id="header">
					<CommunityNavigation/>	
				</div>
				<div id="content">
					<Communities/>
					<div className="frame" id="posts">
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
					</div>
					<div className="frame" id="sidebar">
					</div>
				</div>


			</div>
		)
	}
}

const mapDispatchToProps = { communityInit }

export default connect(null, mapDispatchToProps)(App)
