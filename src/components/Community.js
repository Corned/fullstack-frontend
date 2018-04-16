import React from "react"
import { connect } from "react-redux"
import { withRouter, Route } from 'react-router-dom'

import ExpandedPost from "./community/ExpandedPost"
import LinkPostForm from "./forms/LinkPostForm"
import Loading from "./Loading"
import Navigation from "./community/Navigation"
import Post from "./community/Post"
import PostList from "./community/PostList"
import Sidebar from "./Sidebar"
import TextPostForm from "./forms/TextPostForm"

import { getAllPostsByCommunity } from "../reducers/postReducer"
import { getCommunityByName } from "../reducers/communityReducer"


class Community extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			view: props.view
		}
	}

	componentWillMount() {
		this.props.getCommunityByName(this.props.communityName)
		this.props.getAllPostsByCommunity(this.props.communityName)
	}

	setView = (view) => {
		return () => {
			if (this.props.community === undefined) {
				return
			}

			this.setState({ view })
		}
	}

	render() {
		if (this.props.community === null) {
			return (
				<Loading 
					loadingMessage={"Loading community data.."}
					timeoutMessage={"Community not found :("}
					timeout={1500}
				/>
			)
		}

		return (
			<div id="community" className="apply-margin--vertical-xl">
				<Navigation view={this.state.view} setView={this.setView}/>

				<div id="community-content">	
					<Route exact path="/c/:community/wiki" render={() => 
						<div className="frame">
							<p>{this.props.community.name}'s wiki page</p>
							<p>There's nothing here yet.</p>
							<p>you cant actually sort posts yet.</p>
						</div>
					}/>

					<Route exact path="/c/:community/post/:id" render={() =>
						<ExpandedPost/>
					}/>

					<Route exact path="/c/:community/submit-text" render={() => 
						<TextPostForm/>
					}/>

					<Route exact path="/c/:community/submit-link" render={() => 
						<LinkPostForm/>
					}/>

					<Route exact path="/c/:community/hot" render={({match}) => 
						<PostList/>	
					}/>

					<Route exact path="/c/:community/new" render={({match}) => 
						<PostList/>	
					}/>

					<Route exact path="/c/:community/controversial" render={({match}) => 
						<PostList/>	
					}/>

					<Route exact path="/c/:community/top" render={({match}) => 
						<PostList/>	
					}/>

					<Sidebar setView={this.setView}/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"community": state.communityData.current
	}
}

const mapDispatchToProps = { getCommunityByName, getAllPostsByCommunity }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Community))
