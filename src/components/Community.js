import React from "react"
import { connect } from "react-redux"
import { withRouter, Route } from 'react-router-dom'

import { getCommunityByName } from "../reducers/communityReducer"
import { getAllPostsByCommunity } from "../reducers/postReducer"

import Navigation from "./community/Navigation"
import PostList from "./community/PostList"
import Sidebar from "./Sidebar"
import TextPostForm from "./forms/TextPostForm"


class Community extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			view: "hot"
		}
	}

	componentWillMount() {
		this.props.getCommunityByName(this.props.communityName)
		this.props.getAllPostsByCommunity(this.props.communityName)

		const currentView = /(?:.(?!\/))+$/g.exec(this.props.history.location.pathname)
		if (currentView.length > 0) {
			this.setState({
				view: currentView[0].substring(1)
			})
		}
	}

	setView = (view) => {
		return () => {
			if (this.props.community === undefined) {
				return
			}

			this.setState({ view })
			this.props.history.push(`/c/${this.props.community.name}/${view}`)
		}
	}

	render() {
		if (this.props.community === null) {
			return null
		}

		return (
			<div id="community">
				<Navigation community={this.props.community} view={this.state.view} setView={this.setView}/>
				<div id="community-content">	
					<Route exact path="/c/:community/wiki" render={() => 
						<div className="frame">
							{this.props.community.name}'s wiki page
						</div>
					}/>

					<Route exact path="/c/:community/submit-text" render={() => 
						<TextPostForm/>
					}/>

					<Route exact path="/c/:community/submit-link" render={() => 
						<div className="frame submit">
							<h1>Linkpost</h1>
							<p>You're about to share a link.</p>
							<form>
							<h2>Title</h2>
								<input placeholder="title"/>
								<h2>Link</h2>
								<input placeholder="url"/>
								<button>Submit</button>
							</form>
						</div>
					}/>

					{
						!(this.state.view === "wiki" || this.state.view === "submit-text" || this.state.view === "submit-link") 
						?<Route exact path="/c/:community/:sort" render={() => 
							<PostList/>	
						}/>
						: null
					}
					

					<Sidebar setView={this.setView}/>
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
