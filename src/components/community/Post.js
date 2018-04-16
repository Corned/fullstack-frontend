import React from "react"
import { Link } from "react-router-dom"

import TimeSince from "../../utils/TimeSince"

class Post extends React.Component {
	componentWillMount() {
		if (!this.props.expanded) {
			return
		}

		const postId = this.props.history.location.pathname.split("/")[4]

		if (postId !== null) {
			this.props.getPostById(postId)
		}
	}

	render() {		
		const post = this.props.post
		const location = `/c/${post.community.name}/post/${post.id}`
		post.timeSince = TimeSince(post.date)

		return (
			<div className="post frame">
				<div className="post__thumbnail">
					<img alt="postthumbnail" src="https://i.imgur.com/lFII83x.png"/>
				</div>
				<div className="post__info">
					<Link to={location}>
						<p className="post__title clickable">{post.title}</p>
					</Link>
					type: {post.type}
				</div>
			</div>
		)
	}
}


export default Post
