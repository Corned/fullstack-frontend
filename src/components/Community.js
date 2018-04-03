import React from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'

import { getCommunityByName } from "../reducers/communityReducer"
import { getAllPostsByCommunity } from "../reducers/postReducer"

import Navigation from "./community/Navigation"
import PostList from "./community/PostList"
import Sidebar from "./Sidebar"


class Community extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			view: "hot",
			submitType: false
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
			this.props.history.push(`/c/${this.props.community.name}/${this.state.view}`)
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
