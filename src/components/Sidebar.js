import React from "react"

import SubmitButtons from "./sidebar/SubmitButtons"
import Search from "./sidebar/Search"
import CommunityInformation from "./sidebar/CommunityInformation"
import UserInformation from "./sidebar/UserInformation"

import DropDownMenu from "./DropDownMenu"

import LoginForm from "./LoginForm"

const Sidebar = () => {
	return (
		<div id="sidebar">
			<div id="community-information" className="frame">
				<h1>Cordial-Meta</h1>
				<p className="light-text">745,367 members</p>

				<button id="submit-text-post">Submit Your Thoughts</button>
				<button id="submit-link-post">Share a Link</button>
			</div>
			<div id="community-rules" className="frame">
				<h1>Rules</h1>
				<p>All posts must make an attempt at humor.</p>
				<p>No reaction, MRW, HIFW, or "Me IRL" posts.</p>
				<p>No posts with their sole purpose being to communicate with another redditor.</p>
				<p>Reposts will be removed at the moderators' discretion.</p>
				<p>Posts which result in harassment of any individual, subreddit, or other entity may be removed at the moderators' discretion.</p>
			</div>
		</div>
	)
}

export default Sidebar