import React from "react"

import { connect } from "react-redux"
import { withRouter, Redirect } from "react-router-dom"

import { nullCommunity } from "../reducers/communityReducer"
import { logout } from "../reducers/loggedUserReducer"

import DropDownMenu from "./DropDownMenu"

const Topbar = (props) => {
	const toLoginPage = async () => {
		if (props.history.location.pathname === "/login") {
			return;
		}
		
		props.history.replace(`/login?redirect=${props.history.location.pathname}`)
		await props.nullCommunity()
	}

	const logout = () => {
		props.logout()
	}

	return (
		<div id="topbar">
			<div id="topbar-container">
				<button>Cordial</button>

				<DropDownMenu text={"Communities"}>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
				</DropDownMenu>

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
