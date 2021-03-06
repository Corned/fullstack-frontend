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
			<div id="community-list" className="frame drop-shadow">
				<p 
					className={
						this.props.posts.from === null 
						? "select-community select-community-selected" 
						: "select-community"} 
					onClick={this.navigateTo("/")}
				>All</p>

				{ this.props.communities.length === 0 ? null 
					:
					<div>
						<div id="my-communities">		
							<div>
								{this.props.communities.map((community, index) =>
									<p 
										key={index} 
										className={
											this.props.posts.from === community.name 
											? "select-community select-community-selected" 
											: "select-community"}
										onClick={this.navigateTo(`${community.name}`, true)}
									>{community.name}</p>
								)}
							</div>
						</div>
					</div>

				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		"communities": state.communities,
		"posts": state.posts
	}
}

const mapDispatchToProps = { getAllPosts, getAllPostsFromCommunity }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Communities))

