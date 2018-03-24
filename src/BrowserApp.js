// npm modules
import React from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// components
import DisplayContent from "./components/DisplayContent"
import Communities from "./components/Communities"
import CommunityNavigation from "./components/CommunityNavigation"
import Post from "./components/Post"
import LoginForm from "./components/sidebar/LoginForm"

// reducers
import { communityInit } from "./reducers/community"
import { postInit } from "./reducers/post"
import { login, logout } from "./reducers/loggedUser"

import "./index.css"

class App extends React.Component {
	componentWillMount() {
		//this.props.communityInit()
		this.props.postInit()

		const loggedUserJSON = window.localStorage.getItem("loggedUser")
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON)
			this.props.login(user)
		}
	}

	logout = (event) => {
		event.preventDefault()
		this.props.logout()
	}

	isLoggedIn = () => {
		return this.props.loggedUser !== null
	}

	render() {
		return (
			<div>
				<div id="banner" className="image-shadow">
					<img className="no-select" src="https://i.imgur.com/cuF3Tp7.jpg" alt="banner"/>
					<div id="banner-text" className="no-select">Cordial-Meta</div>
				</div>
				<Router>
					<div id="content">
							<Route path="(/|/c)" render={() => <CommunityNavigation/>}/>
							
							{/* Leftmost */}
							<Communities/>

							{/* Middle */}
							<div className="content-child drop-shadow" id="posts">
								{this.props.posts.map((post) => <Post key={post.id} post={post}/>)}
							</div>

							{/* Rightmost */}
							<div className="content-child" id="sidebar">
								<DisplayContent display={this.isLoggedIn()}>
									<div id="user-information" className="frame drop-shadow">
										<form onSubmit={this.logout}>
											<button type="submit">Logout</button>
										</form>
									</div>
									<div id="submit-selector" className="frame drop-shadow">
										<button id="submit-link">Submit Link</button>
										<button id="submit-text">Submit Text</button>
										<button id="create-community">Create a Community</button>
									</div>
								</DisplayContent>

								<DisplayContent display={!this.isLoggedIn()}>
									<div className="frame drop-shadow">
										<LoginForm/>
									</div>
								</DisplayContent>
							</div>

						</div>
				</Router>
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

const mapDispatchToProps = { communityInit, postInit, login, logout }

export default connect(mapStateToProps, mapDispatchToProps)(App)
