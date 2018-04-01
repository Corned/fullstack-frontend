// npm modules
import React from "react"
import { connect } from "react-redux"
import { withRouter, Route, Link } from 'react-router-dom'

// components
import Community from "./components/Community"
import Sidebar from "./components/Sidebar"

// reducers
import { login, logout } from "./reducers/loggedUserReducer"

import "./index.css"

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {

		const loggedUserJSON = window.localStorage.getItem("loggedUser")
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON)
			this.props.login(user)
		}
	}

	isLoggedIn = () => {
		return this.props.loggedUser !== null
	}

	render() {
		return (
			<div>
				<div id="container">
					<div id="flex-items">
						<Route exact path="/" render={() => 
							<Community community={"frontpage"}/>
						}/>

						<Route path="/c/:community" render={({match}) => 
							<Community community={match.params.community}/>
						}/>

						<Sidebar/>
					</div>
				</div>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"posts": state.posts,
		"loggedUser": state.loggedUser
	}
}

const mapDispatchToProps = { login, logout }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
