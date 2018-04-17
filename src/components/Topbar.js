import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { logout } from "../reducers/loggedUserReducer"
import { getAllUsers } from "../reducers/userReducer"
import { getAllCommunities } from "../reducers/communityReducer"

import Link from "./Link"
import DropDownMenu from "./DropDownMenu"

class Topbar extends React.Component {
	componentWillMount() {
		this.props.getAllCommunities()
		this.props.getAllUsers()
	}

	logout = () => {
		this.props.logout()
	}

	render() {
		return (
			<div id="topbar">
				<div id="topbar-container" className="align--vertically">
					<Link to="/">
						<button>Cordial</button>
					</Link>
	
					<DropDownMenu text="Communities">
						{this.props.communityData.list.map((community, index) =>
							<p>
								<Link to={`/c/${community.name}`}>
									<p className="clickable" key={index}>{community.name}</p>
								</Link>
							</p>
						)}
					</DropDownMenu>
	
					<DropDownMenu text="Users">
						{this.props.userData.list.map((user, index) =>
							<p>
								<Link to={`/u/${user.username}`}>
									<p className="clickable" key={index}>{user.username}</p>
								</Link>
							</p>
						)}
					</DropDownMenu>

					<input 
						className="search-bar"
						placeholder="Search for communities or users"
					/>
	
					<div>
						{this.props.loggedUserData.user === null && 
							<Link to={`/login?redirect=${this.props.history.location.pathname}`}>
								<button>Log in!</button>
							</Link>
						}
	
						{this.props.loggedUserData.user !== null && 
							<button onClick={this.logout}><i>Logged in as</i> {this.props.loggedUserData.user.username}</button>
						}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		"loggedUserData": state.loggedUserData,
		"userData": state.userData,
		"communityData": state.communityData
	}
}

const mapDispatchToProps = { logout, getAllCommunities, getAllUsers }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Topbar))
