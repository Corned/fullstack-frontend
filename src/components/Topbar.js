import React from "react"
import { connect } from "react-redux"
import { withRouter, Redirect } from "react-router-dom"

import { nullCommunity } from "../reducers/communityReducer"
import { logout } from "../reducers/loggedUserReducer"

import Link from "./Link"
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
			<div id="topbar-container" className="align--vertically">
				<Link to="/c/cordial">
					<button>temp c/Cordial</button>
				</Link>

				<DropDownMenu text={"Communities"}>
					<p>:(</p>
				</DropDownMenu>

				<div style={{marginLeft: "auto"}}>
					{props.userdata.user === null && 
						<Link to={`/login?redirect=${props.history.location.pathname}`}>
							<button>Log in!</button>
						</Link>
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
