import React from "react"

import { connect } from "react-redux"

import { withRouter, Redirect } from "react-router-dom"
import { nullCommunity } from "../reducers/communityReducer"
import { logout } from "../reducers/loggedUserReducer"

import DropDownMenu from "./DropDownMenu"

const Topbar = (props) => {
	const toLoginPage = async () => {
		props.history.replace("/login")
		await props.nullCommunity()
	}

	const logout = () => {
		props.logout()
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
					
					{props.userdata.user === null && 
						<button onClick={toLoginPage}>Login</button>
					}

					{props.userdata.user !== null && 
						<button onClick={logout}><i>Logged in as</i> {props.userdata.user.username}</button>	
					}


						
						
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		"userdata": state.userdata
	}
}

const mapDispatchToProps = { nullCommunity, logout }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Topbar))
