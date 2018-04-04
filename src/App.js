import React from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, withRouter, Route, Link, Redirect } from 'react-router-dom'

import Community from "./components/Community"
import Topbar from "./components/Topbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/temp/Footer"
import LoginAndRegistration from "./components/LoginAndRegistration"

import { login, logout } from "./reducers/loggedUserReducer"

import postService from "./services/postService"
import communityService from "./services/communityService"

import "./index.css"

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		const loggedUserJSON = window.localStorage.getItem("cordialUserdata")
		// häh
		if (loggedUserJSON !== "null") {
			const user = JSON.parse(loggedUserJSON)
			this.props.login(user)
		}
	}

	isLoggedIn = () => {
		return this.props.loggedUser !== null
	}

	render() {
		return (
			<Router>
				<div>
					<Topbar/>

					<div id="container">
						<Route exact path="/login" render={() =>
							<LoginAndRegistration/>
						}/>

						<Route exact path="/c/" render={({match}) => 
							<Redirect to={`/`}/>
						}/>

						<Route exact path="/c/:community/" render={({match}) => 
							<Redirect to={`/c/${match.params.community}/hot`}/>
						}/>

						<Route path="/c/:community/:view" render={({match}) => 
							<Community communityName={match.params.community} view={match.params.view}/>
						}/>
					</div>
				</div>
			</Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
