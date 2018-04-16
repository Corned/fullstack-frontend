import React from "react"
import { connect } from "react-redux"
import { withRouter, Route } from 'react-router-dom'

import ExpandedPost from "./community/ExpandedPost"
import LinkPostForm from "./forms/LinkPostForm"
import Loading from "./Loading"
import Navigation from "./community/Navigation"
import PostList from "./community/PostList"
import Sidebar from "./Sidebar"
import TextPostForm from "./forms/TextPostForm"

import { getUserByUsername } from "../reducers/userReducer"


class Profile extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			view: props.view
		}
	}

	componentWillMount() {
		this.props.getUserByUsername(this.props.username)
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
					loadingMessage={"Loading user data.."}
					timeoutMessage={"User not found :("}
					timeout={1500}
				/>
			)
		}

		return (
			<Navigation 
				action={this.setView}
				currentView={this.state.view}
				baseUrl={`/u/${this.props.user.username}`}
				labels={[ "overview", "posts", "comments", "liked", "disliked" ]}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		"user": state.userData.current
	}
}

const mapDispatchToProps = { getUserByUsername }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
