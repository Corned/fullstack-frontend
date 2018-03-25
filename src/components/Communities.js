import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { postsFromCommunity } from "../reducers/post"

class Communities extends React.Component {
	navigateTo = (to) => {
		return () => {
			if (this.props.history.location.pathname !== to) {
				this.props.history.push(to)
				this.props.postsFromCommunity(to)
			}
		}
	}

	render() {
		return (
			<div className="frame drop-shadow" id="communities">
				<p className="select-community" onClick={this.navigateTo("/")}>All</p>
				{/* <p className="select-community" onClick={this.navigateTo("/c/all")}>All</p> */}
				{/* <p className="select-community" onClick={this.navigateTo("/random")}>Random</p> */}
				{ this.props.communities.length === 0 ? null 
					: 
					<div id="my-communities">
						<div className="divider"/>			
						<div>
							{this.props.communities.map((community, index) =>
								<p 
									key={index} 
									className="select-community"
									onClick={this.navigateTo(`/c/${community.name}`)}
								>{community.name}</p>
							)}
						</div>
					</div>

				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		"communities": state.communities
	}
}

const mapDispatchToProps = { postsFromCommunity }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Communities))

