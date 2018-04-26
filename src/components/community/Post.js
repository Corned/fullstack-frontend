import React from "react"
import { Link } from "react-router-dom"

import TimeSince from "../../utils/TimeSince"

class Post extends React.Component {
	render() {		
		const post = this.props.post
		const location = `/c/${post.community.name}/post/${post.id}`
		post.timeSince = TimeSince(post.date)

		return (
			<div className="post background-white card">
				<div className="post__thumbnail">
					<img alt="postthumbnail" src="https://i.imgur.com/lFII83x.png"/>
				</div>
				<div className="post__info">
					{/* TITLE */}
					<Link to={location}>
						<p className="post__title clickable primary-text">{post.title}</p>
					</Link>

					{/* BASIC INFORMATION, DATE, USERNAME, COMMUNITY */}
					<p className="secondary-text basic-info">
						<span className="light-text">submitted</span>
						&nbsp;
						{post.timeSince} 
						<span className="light-text"> ago by</span>
						&nbsp;
						<Link to={`/u/${post.user.username}`}>
							<span className="clickable">{post.user.username}</span>
						</Link>
						<span className="light-text">
							&nbsp;
							in
							&nbsp;
							<Link to={`/c/${post.community.name}`}>
								<span className="clickable">c/{post.community.name}</span>
							</Link>
						</span>
					</p>

					{/* ACTIONS, COMMENTS, SHARE */}
					<p className="secondary-text actions">
						<Link to={location}>
							<span className="clickable">{post.comments.length} comment{post.comments.length === 1 ? "" : "s"}</span>
						</Link>&nbsp;
					</p>
				</div>
			</div>
		)
	}
}


export default Post
