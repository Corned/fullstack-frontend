// npm modules
import React from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// components
import DisplayContent from "./components/DisplayContent"
import Communities from "./components/Communities"
import CommunityNavigation from "./components/CommunityNavigation"
import Post from "./components/Post"
import Login from "./components/Login"

import Search from "./components/sidebar/Search"
import SubmitButtons from "./components/sidebar/SubmitButtons"
import UserInformation from "./components/sidebar/UserInformation"
import CommunityInformation from "./components/sidebar/CommunityInformation"

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
					<div id="banner-text" className="no-select">Popular</div>
				</div>

				<Router>
					<div id="content">
						<Route path="(/|/c)" render={() => <CommunityNavigation/>}/>
						
						{/* Leftmost */}
						<Communities/>

						{/* Middle */}
						<Route path="(/|/c)" render={() => {
							return (
								<div className="content-child fill drop-shadow" id="posts">
									{this.props.posts.map((post) => <Post key={post.id} post={post}/>)}
								</div>
							)
						}}/>

						<Route path="/submit" render={() => {
							return (
								<div className="frame content-child fill drop-shadow">
									hello world!
								</div>
							)
						}}/>

						{/* Rightmost */}
						<div className="content-child" id="sidebar">
							<Search/>

							<DisplayContent display={this.isLoggedIn()}>
								<SubmitButtons/>
								<UserInformation/>
								<CommunityInformation/>
							</DisplayContent>

							<DisplayContent display={!this.isLoggedIn()}>
								<div className="frame drop-shadow">
									<Login/>
								</div>
							</DisplayContent>
						</div>

					</div>
				</Router>

				<div id="footer" className="drop-shadow">
					<div className="image">
						<a target="_blank" href="https://github.com/Corned/fullstack-frontend">
							<img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png"/>
						</a>
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

const mapDispatchToProps = { communityInit, postInit, login, logout }

export default connect(mapStateToProps, mapDispatchToProps)(App)
