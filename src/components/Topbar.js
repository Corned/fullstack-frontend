import React from "react"

import DropDownMenu from "./DropDownMenu"

const Sidebar = () => {
	return (
		<div id="topbar">
			<div id="topbar-container">
				<DropDownMenu text={"Your Subscriptions"}>
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

export default Sidebar