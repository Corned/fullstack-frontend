import React from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'

import { getCommunityByName } from "../reducers/communityReducer"
import { getAllPostsByCommunity } from "../reducers/postReducer"

import Navigation from "./community/Navigation"
import PostList from "./community/PostList"
import Sidebar from "./Sidebar"


class Community extends React.Component {
	componentWillMount() {
		this.props.getCommunityByName(this.props.communityName)
		this.props.getAllPostsByCommunity(this.props.communityName)
	}

	render() {
		return (
			<div id="community">
				<Navigation community={this.props.community}/>
				<div id="community-content">	
					<PostList/>					
					<Sidebar/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"community": state.community,
		"posts": state.posts
	}
}

const mapDispatchToProps = { getCommunityByName, getAllPostsByCommunity }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Community))
