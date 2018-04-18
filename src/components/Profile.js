import React from "react"
import { connect } from "react-redux"
import { withRouter, Route } from 'react-router-dom'

import Loading from "./Loading"
import Navigation from "./community/Navigation"
import PostList from "./community/PostList"
import Sidebar from "./Sidebar"

import ProfileInformation from "./sidebar_components/ProfileInformation"

import { getUserByUsername, clearUser } from "../reducers/userReducer"
import { getAllPostsByUser, clearPosts } from "../reducers/postReducer"


class Profile extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			view: props.view
		}
	}

	componentWillMount() {
		this.props.clearPosts();
		this.props.clearUser();
		this.props.getUserByUsername(this.props.username)
		this.props.getAllPostsByUser(this.props.username)
	}

	setView = (view) => {
		return () => {
			this.setState({ view })
		}
	}

	render() {
		if (this.props.user === null) {
			return (
				<Loading 
					loadingMessage="Loading user data.."
					timeoutMessage="User not found :("
					timeout={1500}
				/>
			)
		}

		return (
			<div id="community" className="apply-margin--vertical-xl">
				<Navigation 
					action={this.setView}
					currentView={this.state.view}
					baseUrl={`/u/${this.props.user.username}/`}
					labels={[ "overview", "posts", "comments", "liked", "disliked" ]}
				/>

				<div id="community-content">	
					<PostList postList={this.props.postList}/>		
					<Sidebar>
						<ProfileInformation user={this.props.user}/>
					</Sidebar>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		"user": state.userData.current,
		"postList": state.postData.list
	}
}

const mapDispatchToProps = { getUserByUsername, clearUser, getAllPostsByUser, clearPosts }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
