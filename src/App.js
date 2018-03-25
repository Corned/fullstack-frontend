// npm modules
import React from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'

// components
import CommunityNavigation from "./components/CommunityNavigation"
import Communities from "./components/Communities"
import PostList from "./components/PostList"
import Sidebar from "./components/Sidebar"


// reducers
import { getAllCommunities } from "./reducers/community"
import { getAllPosts, getAllPostsFromCommunity } from "./reducers/post"
import { login, logout } from "./reducers/loggedUser"

import "./index.css"

class App extends React.Component {
	componentWillMount() {
		this.props.getAllCommunities()

		const pathname = this.props.history.location.pathname
		if (pathname === "/") {
			this.props.getAllPosts()
		} else if (/c\/.*$/g.test(pathname)) {
			// /c/<CommunityName>
			this.props.getAllPostsFromCommunity(pathname.substring(3))
		}

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
				<div id="banner">
					<img className="no-select" src="https://i.imgur.com/cuF3Tp7.jpg" alt="banner"/>
					<div className="no-select" id="banner-text">{this.props.posts.from === null ? "All" : this.props.posts.from}</div>
					<div className="inset-image-shadow"/>
				</div>

				<div id="container">
					<CommunityNavigation/>
				
					<div id="flex-items">
						<Communities/>
						<PostList posts={this.props.posts}/>
						<Sidebar/>
					</div>
				</div>


				{/*
				<footer id="footer" className="drop-shadow">
					<div className="image">
						<a target="_blank" rel="noopener noreferrer" href="https://github.com/Corned/fullstack-frontend">
							<img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png" alt="github"/>
						</a>
					</div>
				</footer> 
				*/}
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

const mapDispatchToProps = { getAllCommunities, getAllPosts, getAllPostsFromCommunity, login, logout }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
