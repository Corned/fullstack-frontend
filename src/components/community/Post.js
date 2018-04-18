import React from "react"

import Link from "../Link"

import TimeSince from "../../utils/TimeSince"

class Post extends React.Component {
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
						<p className="post__title clickable primary-text">{post.title}</p>
					</Link>
					<p className="secondary-text">
						<span className="light-text">submitted</span>&nbsp;
						{post.timeSince} 
						<span className="light-text"> ago by</span>&nbsp;
						<Link to={`/u/${post.user.username}`}>
							<span className="clickable">{post.user.username}</span>
						</Link>
						<span className="light-text">
							&nbsp;in&nbsp;
							<Link to={`/c/${post.community.name}`}>
								<span className="clickable">c/{post.community.name}</span>
							</Link>
						</span>
					</p>
				</div>
			</div>
		)
	}
}


export default Post
