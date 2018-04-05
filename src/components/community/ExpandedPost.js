import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { getPostById } from "../../reducers/postReducer"


class ExpandedPost extends React.Component {
	componentWillMount() {
		const postId = this.props.history.location.pathname.split("/")[4]

		if (postId !== null) {
			this.props.getPostById(postId)
		}
	}

	render() {
		const post = this.props.post

		if (post === null) {
			return null
		}

		if (typeof post.date === "string") {
			post.date = new Date(post.date)
		}
	
		const currentTime = new Date().getTime() / (1000 * 60 * 60)
		const postTime = post.date.getTime() / (1000 * 60 * 60)
		const deltaTimeHours = Math.floor(currentTime - postTime)
		const deltaTimeDays = Math.floor(deltaTimeHours / 24)
		
		let postAdded
		if (deltaTimeHours < 1) {
			postAdded = "less than an hour ago"
		} else if (deltaTimeHours < 24) {
			postAdded = `${deltaTimeHours === 1 ? "an" : deltaTimeHours} hour${deltaTimeHours === 1 ? "" : "s"} ago`
		} else {
			postAdded = `${deltaTimeDays === 1 ? "a" : deltaTimeDays} day${(deltaTimeDays === 1 ? "" : "s")} ago`
		}

		return (
			<div>
				<div className="single-post frame">
					<div className="post" style={{ marginBottom: "1em" }}>
						<div className="post__thumbnail">
							<img alt="post-thumbnail" src="https://i.imgur.com/a7TZ0Yo.png"/>
						</div>
						<div className="post__info">
							<p className="post__title">{post.title}</p>
						</div>
					</div>

					<p>{post.body}</p>
				</div>
				<br/>
				<div id="comments" className="frame apply-margin--vertical">
					<h2>634 Comments</h2>
					<form className="apply-margin--vertical">
						<textarea 
							style={{
								width: "100%"
							}}
							rows="4"
							placeholder="Your blissful thoughts"
						></textarea>
						<button>Save? 🤔</button>
					</form>
					<p className="tertiary-text">
						comments go here thank you very much
					</p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"post": state.posts.post
	}
}

const mapDispatchToProps = { getPostById }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ExpandedPost))
