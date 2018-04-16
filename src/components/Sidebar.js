import React from "react"
import { connect } from "react-redux"

import CommunityInformation from "./sidebar/CommunityInformation"
import DropDownMenu from "./DropDownMenu"
import Link from "./Link"
import UserInformation from "./sidebar/UserInformation"

const Sidebar = ({ community, setView }) => {
	const submitButtonUrl = `/c/${community.name}/`

	return (
		<div id="sidebar" className="apply-margin--vertical-xl">
			<div id="community-information" className="frame apply-margin--vertical">
				<h1>{community.name}</h1>
				<p className="secondary-text">{community.members.length} members</p>

				<Link to={`${submitButtonUrl}submit-text`} onClick={setView("submit-text")}>
					<button style={{width: "100%"}}>Submit Your Thoughts</button>
				</Link>

				<Link to={`${submitButtonUrl}submit-link`} onClick={setView("submit-link")}>
					<button style={{width: "100%"}}>Share a Link</button>
				</Link>
			</div>
			<div id="community-rules" className="frame apply-margin--vertical">
				<h1>Rules</h1>
				<p className="primary-text">All posts must make an attempt at humor.</p>
				<p className="primary-text">No reaction, MRW, HIFW, or "Me IRL" posts.</p>
				<p className="primary-text">No posts with their sole purpose being to communicate with another redditor.</p>
				<p className="primary-text">Reposts will be removed at the moderators' discretion.</p>
				<p className="primary-text">Posts which result in harassment of any individual, subreddit, or other entity may be removed at the moderators' discretion.</p>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return { 
		"community": state.communityData.current
	}
}

export default connect(mapStateToProps, null)(Sidebar)
