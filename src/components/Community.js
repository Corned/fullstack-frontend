import React from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'

import Navigation from "./community/Navigation"
import PostList from "./community/PostList"

import { getAllCommunities } from "../reducers/communityReducer"
import { getAllPosts, getAllPostsFromCommunity } from "../reducers/postReducer"

class Community extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			name: null
		}
	}

	componentWillMount() {
		const pathname = this.props.history.location.pathname
		if (pathname === "/") {
			this.props.getAllPosts()
		} /* else if (/c\/.*$/g.test(pathname)) {
			// /c/<CommunityName>
			this.props.getAllPostsFromCommunity(pathname.substring(3))
		} */

		console.log(this.props.posts)
	}


	render() {
		return (
			<div>
				<Navigation/>
				<PostList posts={this.props.posts}/>
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
