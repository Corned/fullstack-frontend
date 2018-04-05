import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { getPostById } from "../../reducers/postReducer"

const Post = (props) => {
	const post = props.post

	const toPost = () => {
		props.history.push(`/c/${post.community.name}/post/${post.id}`)
		props.getPostById(post.id)
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
		<div className="post frame">
			<div className="post__thumbnail">
				<img alt="postthumbnail" src="https://i.imgur.com/a7TZ0Yo.png"/>
			</div>
			<div className="post__info">
				<p onClick={toPost} className="post__title clickable">{post.title}</p>
			</div>
		</div>
	)
}

const mapDispatchToProps = { getPostById }

export default connect(null, mapDispatchToProps)(withRouter(Post))
