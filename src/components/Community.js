import React from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'

import Navigation from "./community/Navigation"
import PostList from "./community/PostList"
import Sidebar from "./Sidebar"

import { getAllCommunities } from "../reducers/communityReducer"
import { getAllPosts, getAllPostsFromCommunity } from "../reducers/postReducer"

class Community extends React.Component {
	componentWillMount() {
		this.props.getAllPosts()
	}

	render() {
		return (
			<div id="community">
				<Navigation community={this.props.community}/>
				<div id="community-content">						
					<PostList posts={this.props.posts}/>
					<Sidebar/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"posts": state.posts
	}
}

const mapDispatchToProps = { getAllCommunities, getAllPosts, getAllPostsFromCommunity }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Community))
