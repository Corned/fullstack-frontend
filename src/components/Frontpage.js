import React from "react"
import { connect } from "react-redux"
import { withRouter, Route } from 'react-router-dom'

import Navigation from "./community/Navigation"
import PostList from "./community/PostList"
import Sidebar from "./Sidebar"
import TextPostForm from "./forms/TextPostForm"
import LinkPostForm from "./forms/LinkPostForm"
import ExpandedPost from "./community/ExpandedPost"
import Post from "./community/Post"
import Loading from "./Loading"

import { getCommunityByName } from "../reducers/communityReducer"
import { getAllPostsByCommunity } from "../reducers/postReducer"


class Frontpage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
		}
	}

	componentWillMount() {
	}

	render() {
		/*
		return (
			<Loading 
				loadingMessage={"Hey, this will be the frontpage."}
				timeoutMessage={"It's not finished yet, go away."}
				timeout={1500}
			/>
		)
		*/
		
		return (
			<div id="community" className="apply-margin--vertical-xl">
				{/* <Navigation view={this.state.view} setView={this.setView}/> */}

				<div id="community-content">	
					<div className="frame fill">
						under construction, click "goto c/Cordial" to do stuffs
					</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Frontpage))
