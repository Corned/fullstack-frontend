import React from "react"

const Post = ({ post }) => {
	if (typeof post.date === "string") {
		post.date = new Date(post.date)
	}

	const currentTime = new Date().getTime() / (1000 * 60 * 60)
	const postTime = post.date.getTime() / (1000 * 60 * 60)
	const deltaTime = Math.floor(currentTime - postTime)
	
	let postAdded
	if (deltaTime < 1) {
		postAdded = "less than an hour ago"
	} else if (deltaTime < 24) {
		postAdded = `${deltaTime === 1 ? "an" : deltaTime} hour${deltaTime === 1 ? "" : "s"} ago`
	} else {
		postAdded = `${(deltaTime % 24)} day${(deltaTime % 24 === 1 ? "" : "s")} ago`
	}

	return (
		<div className="post frame">
			<img className="thumbnail" alt="lol" src="https://i.imgur.com/a7TZ0Yo.png"/>
			<div className="post-info">
				<p className="post-title">{post.title}<span className="small-text light-text">(imgur.com)</span></p>
				<p className="post-added"><span className="light-text">submitted</span> {postAdded} <span className="light-text">by</span> <span className="poster">{post.user.username}</span>  <span className="light-text">(/c/{post.community.name})</span></p>
				<p className="post-other"><span className="comments">{post.comments.length} comment{post.comments.length === 1 ? "" : "s"}</span> <span className="share">share</span> <span className="save">save</span></p>
			</div>
		</div>
	)
}

export default Post