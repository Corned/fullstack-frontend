import React from "react"

import { connect } from "react-redux"

import { withRouter, Redirect } from "react-router-dom"
import { nullCommunity } from "../reducers/communityReducer"

import DropDownMenu from "./DropDownMenu"
import LoginForm from "./LoginForm"

const Topbar = (props) => {
	const toLoginPage = async () => {
		props.history.replace("/login")
		await props.nullCommunity(null)
	}

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
					<button onClick={toLoginPage}>Login</button>
				</div>
			</div>
		</div>
	)
}


const mapDispatchToProps = { nullCommunity }

export default connect(null, mapDispatchToProps)(withRouter(Topbar))
