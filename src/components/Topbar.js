import React from "react"

import DropDownMenu from "./DropDownMenu"
import LoginForm from "./LoginForm"

const Sidebar = () => {
	return (
		<div id="topbar">
			<div id="topbar-container">
				<DropDownMenu text={"Communities"}>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
				</DropDownMenu>

				<input
					placeholder="Search for anything!"
				/>

				<div style={{marginLeft: "auto"}}>
					<DropDownMenu text={"Login"}>
						<LoginForm/>
					</DropDownMenu>
				</div>
			</div>
		</div>
	)
}

export default Sidebar