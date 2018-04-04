import React from "react"
import { connect } from "react-redux"

import SubmitButtons from "./sidebar/SubmitButtons"
import Search from "./sidebar/Search"
import CommunityInformation from "./sidebar/CommunityInformation"
import UserInformation from "./sidebar/UserInformation"

import DropDownMenu from "./DropDownMenu"

class Sidebar extends React.Component {
	render() {
		return (
			<div id="sidebar">
				<div id="community-information" className="frame">
					<h1>{this.props.community.name}</h1>
					<p className="light-text">745,367 members</p>

					<button id="submit-text-post" onClick={this.props.setView("submit-text")}>Submit Your Thoughts</button>
					<button id="submit-link-post" onClick={this.props.setView("submit-link")}>Share a Link</button>
				</div>
				<div id="community-rules" className="frame">
					<h1>Rules</h1>
					<p>All posts must make an attempt at humor.</p>
					<p>No reaction, MRW, HIFW, or "Me IRL" posts.</p>
					<p>No posts with their sole purpose being to communicate with another redditor.</p>
					<p>Reposts will be removed at the moderators' discretion.</p>
					<p>Posts which result in harassment of any individual, subreddit, or other entity may be removed at the moderators' discretion.</p>				
					<DropDownMenu text={"Communities"}>
						<p>Cordial-Meta</p>
						<p>Cordial-Meta</p>
						<p>Cordial-Meta</p>
						<p>Cordial-Meta</p>
						<p>Cordial-Meta</p>
						<p>Cordial-Meta</p>
					</DropDownMenu>
				</div>				
				

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"community": state.community
	}
}

export default connect(mapStateToProps, null)(Sidebar)
