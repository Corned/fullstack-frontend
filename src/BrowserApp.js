import React from "react"
import { connect } from "react-redux"

import Communities from "./components/Communities"
import CommunityNavigation from "./components/CommunityNavigation"
import Post from "./components/Post"
import LoginForm from "./components/LoginForm"

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
				<CommunityNavigation/>	
				<div id="content">
					<Communities/>
					<div className="drop-shadow" id="posts">
						{this.props.posts.map((post) => <Post key={post.id} post={post}/>)}
					</div>

					{this.isLoggedIn() ?
						<div id="sidebar">
							<div id="user-information" className="frame drop-shadow">
								<p className="sidebar-title">{this.props.loggedUser.user.username}</p>
								<form onSubmit={this.logout}>
									<button type="submit">Logout</button>
								</form>
							</div>
							<div id="submit-selector" className="frame drop-shadow">
								<button id="submit-link">Submit Link</button>
								<button id="submit-text">Submit Text</button>
								<button id="create-community">Create a Community</button>
							</div>
						</div>
						:
						<div id="sidebar">
							<div className="frame drop-shadow">
								<LoginForm/>
							</div>
						</div>
					}
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
