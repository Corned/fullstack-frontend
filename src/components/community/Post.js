import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { getPostById } from "../../reducers/postReducer"

import TimeSince from "../../utils/TimeSince"

const Post = (props) => {
	const post = props.post

	const toPost = () => {
		props.history.push(`/c/${post.community.name}/post/${post.id}`)
		props.getPostById(post.id)
	}
	
	post.date = TimeSince(post.date)

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
