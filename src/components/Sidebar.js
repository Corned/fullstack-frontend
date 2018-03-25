import React from "react"

import SubmitButtons from "./sidebar/SubmitButtons"
import Search from "./sidebar/Search"
import CommunityInformation from "./sidebar/CommunityInformation"
import UserInformation from "./sidebar/UserInformation"

import Login from "./Login"

const Sidebar = () => {
	return (
		<div id="sidebar">
			<Search/>
			<div className="frame drop-shadow">
				<Login/>
			</div>
			<UserInformation/>
			<SubmitButtons/>
			<CommunityInformation/>
		</div>
	)
}

export default Sidebar