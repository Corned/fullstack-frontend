import React from "react"

import SubmitButtons from "./sidebar/SubmitButtons"
import Search from "./sidebar/Search"
import CommunityInformation from "./sidebar/CommunityInformation"
import UserInformation from "./sidebar/UserInformation"

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
		</div>
	)
}

export default Sidebar