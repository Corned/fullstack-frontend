import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { getAllPosts, getAllPostsFromCommunity } from "../reducers/post"

class Communities extends React.Component {
	navigateTo = (destination, isCommunity) => {
		return () => {
			let toPush

			if (isCommunity) {
				toPush = `/c/${destination}`
				this.props.getAllPostsFromCommunity(destination)
			} else if (destination === "/") {
				toPush = "/"
				this.props.getAllPosts()
			}

			if (this.props.history.location.pathname === toPush) {
				return;
			}

			this.props.history.push(toPush)
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
									onClick={this.navigateTo(`${community.name}`, true)}
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

const mapDispatchToProps = { getAllPosts, getAllPostsFromCommunity }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Communities))

