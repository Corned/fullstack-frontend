import React from "react"
import { connect } from "react-redux"

import Communities from "./components/Communities"
import CommunityNavigation from "./components/CommunityNavigation"
import Post from "./components/Post"

import { communityInit } from "./reducers/community"
import { postInit } from "./reducers/post"

import "./index.css"

class App extends React.Component {
	componentWillMount() {
		this.props.communityInit()
		this.props.postInit()
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
						{this.props.posts.map((post) => <Post key={post.id} post={post}/>)}
					</div>
					<div className="frame" id="sidebar">
						<form id="login-form">
							<input type="text" name="username" placeholder="username"/>
							<input type="password" name="password" placeholder="password"/>
							<button type="submit">Log in!</button>
						</form>
						<button id="submit-link">Submit Link</button>
						<button id="submit-text">Submit Text</button>
					</div>
				</div>


			</div>
		)
	}
}

const mapStateToProps = (state) => {return { "posts": state.posts }}
const mapDispatchToProps = { communityInit, postInit }

export default connect(mapStateToProps, mapDispatchToProps)(App)
