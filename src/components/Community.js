import React from "react"
import { connect } from "react-redux"
import { withRouter, Route, Switch } from 'react-router-dom'

import ExpandedPost from "./community/ExpandedPost"
import LinkPostForm from "./forms/LinkPostForm"
import Loading from "./Loading"
import Navigation from "./community/Navigation"
import PostList from "./community/PostList"
import Sidebar from "./Sidebar"
import TextPostForm from "./forms/TextPostForm"
import CommunityRules from "./sidebar_components/CommunityRules"
import CommunityInformation from "./sidebar_components/CommunityInformation"
import CommunityModerators from "./sidebar_components/CommunityModerators"

import { getAllPostsByCommunity, clearPosts } from "../reducers/postReducer"
import { getCommunityByName } from "../reducers/communityReducer"


class Community extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			view: props.view
		}
	}

	componentWillMount() {
		this.props.clearPosts()
		this.props.getCommunityByName(this.props.communityName)
		this.props.getAllPostsByCommunity(this.props.communityName)
	}

	setView = (view) => {
		return () => {
			this.setState({ view })
		}
	}

	render() {
		if (this.props.community === null) {
			return (
				<Loading 
					loadingMessage="Loading community data.."
					timeoutMessage="Community not found :("
					timeout={1500}
				/>
			)
		}

		return (
			<div id="community" className="apply-margin--vertical-xl">
				<Navigation 
					action={this.setView}
					currentView={this.state.view}
					baseUrl={`/c/${this.props.community.name}/`}
					labels={[ "hot", "new", "controversial", "top", "wiki" ]}
				/>

				<div id="community-content">
					<Switch>
						<Route exact path="/c/:community/post/:id" render={() =>
							<ExpandedPost/>
						}/>

						<Route exact path="/c/:community/submit-text" render={() => 
							<TextPostForm/>
						}/>

						<Route exact path="/c/:community/submit-link" render={() => 
							<LinkPostForm/>
						}/>

						<Route exact path="/c/:community/wiki" render={() => 
							<div className="frame">
								<p>{this.props.community.name}'s wiki page</p>
								<p>There's nothing here yet.</p>
							</div>
						}/>

						<Route exact path="/c/:community/:view" render={({match}) => 
							<PostList 
								postList={this.props.postList}
							/>	
						}/>
					</Switch>

					<Sidebar>
						<CommunityInformation setView={this.setView}/>
						<CommunityRules/>
						<CommunityModerators/>
					</Sidebar>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"community": state.communityData.current,
		"postList": state.postData.list
	}
}

const mapDispatchToProps = { getCommunityByName, getAllPostsByCommunity, clearPosts }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Community))
