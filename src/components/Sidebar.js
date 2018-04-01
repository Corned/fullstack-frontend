import React from "react"

import SubmitButtons from "./sidebar/SubmitButtons"
import Search from "./sidebar/Search"
import CommunityInformation from "./sidebar/CommunityInformation"
import UserInformation from "./sidebar/UserInformation"

import LoginForm from "./LoginForm"

const Sidebar = () => {
	return (
		<div id="sidebar">
			{/* <Search/> */ }
			<LoginForm/>
			<UserInformation/>
			<SubmitButtons/>
		</div>
	)
}

export default Sidebar