import React from "react"
import { connect } from "react-redux"
import { withRouter, Redirect } from "react-router-dom"

import { logout } from "../reducers/loggedUserReducer"
import { getAllUsers } from "../reducers/userReducer"
import { getAllCommunities } from "../reducers/communityReducer"

import Link from "./Link"
import DropDownMenu from "./DropDownMenu"

class Topbar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

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
					<Link to="/c/cordial">
						<button>goto c/Cordial</button>
					</Link>
	
					<DropDownMenu text="Communities">
						{this.props.community.communityList.map((community, index) =>
							<p key={index}>{community.name}</p>
						)}
					</DropDownMenu>
	
					<DropDownMenu text="Users">
						{this.props.users.userList.map((user, index) =>
							<p key={index}>{user.username}</p>
						)}
					</DropDownMenu>

					<input 
						className="search-bar"
						placeholder="Search for communities or users"
					/>
	
					<div>
						{this.props.userdata.user === null && 
							<Link to={`/login?redirect=${this.props.history.location.pathname}`}>
								<button>Log in!</button>
							</Link>
						}
	
						{this.props.userdata.user !== null && 
							<button onClick={this.logout}><i>Logged in as</i> {this.props.userdata.user.username}</button>
						}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		"userdata": state.userdata,
		"users": state.users,
		"community": state.community
	}
}

const mapDispatchToProps = { logout, getAllCommunities, getAllUsers }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Topbar))
