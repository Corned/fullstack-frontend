import React from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Community from "./components/Community"
import Footer from "./components/temp/Footer"
import Frontpage from "./components/Frontpage"
import LoginAndRegistration from "./components/LoginAndRegistration"
import Profile from "./components/Profile"
import Topbar from "./components/Topbar"

import { login, logout } from "./reducers/loggedUserReducer"

import "./index.css"

class App extends React.Component {
	componentWillMount() {
		const loggedUserJSON = window.localStorage.getItem("cordialUserdata")
		// häh
		if (loggedUserJSON !== "null") {
			const user = JSON.parse(loggedUserJSON)
			this.props.login(user)
		}
	}

	render() {
		return (
			<Router>
				<div>
					<Topbar/>

					<div id="container">
						<Route exact path="/" render={() => 
							<Redirect to="/front"/>
						}/>

						<Route path="/front" render={() => 
							<Frontpage/>
						}/>

						<Route exact path="/login" render={() =>
							<LoginAndRegistration/>
						}/>

						<Route exact path="(/c/|/u/)" render={() => 
							<Redirect to="/"/>
						}/>

						<Route exact path="/u/:username/" render={({match}) =>
							<Redirect to={`/u/${match.params.username}/overview`}/>
						}/>

						<Route exact path="/u/:username/:view" render={({match}) =>
							<Profile username={match.params.username} view={match.params.view}/>
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
