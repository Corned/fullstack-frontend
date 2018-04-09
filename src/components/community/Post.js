import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { getPostById } from "../../reducers/postReducer"

import TimeSince from "../../utils/TimeSince"

const Post = ({ post }) => {
	post.date = TimeSince(post.date)

	const location = `/c/${post.community.name}/post/${post.id}`

	return (
		<div className="post frame">
			<div className="post__thumbnail">
				<img alt="postthumbnail" src="https://i.imgur.com/lFII83x.png"/>
			</div>
			<div className="post__info">
				<Link to={location}>
					<p className="post__title clickable">{post.title}</p>
				</Link>
			</div>
		</div>
	)
}

const mapDispatchToProps = { getPostById }

export default connect(null, mapDispatchToProps)(Post)
