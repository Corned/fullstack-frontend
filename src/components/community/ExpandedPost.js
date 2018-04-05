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

		console.log(post.body)

		return (
			<div className="frame">
				<div className="thumbnail">
					<img alt="post-thumbnail" src="https://i.imgur.com/a7TZ0Yo.png"/>
				</div>
				<div className="post-info">
					<p className="post-title">{post.title}<span className="small-text light-text">(imgur.com)</span></p>
					<p className="post-added"><span className="light-text">submitted</span> {postAdded} <span className="light-text">by</span> <span className="poster">{post.user.username}</span></p>
					<p className="post-other"><span className="comments">0 Comments - c/{post.community.name}</span></p>
				</div>

				<p>{this.props.post.body}</p>
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