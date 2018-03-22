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

	render() {
		return (
			<div>
				<CommunityNavigation/>	
				<div id="content">
					<Communities/>
					<div id="posts">
						{this.props.posts.map((post) => <Post key={post.id} post={post}/>)}
					</div>
					<div className="frame" id="sidebar">
						<LoginForm/>
						{this.props.loggedUser === null ? "Not logged in.." : `Logged in as ${this.props.loggedUser.user.username}`}
						<button id="submit-link">Submit Link</button>
						<button id="submit-text">Submit Text</button>
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
