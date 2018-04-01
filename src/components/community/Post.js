import React from "react"

const Post = ({ post }) => {
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
			{/* <div className="voting">
				<button className="upvote-button">^</button>
				<p className="votes">347</p>
				<button className="downvote-button">v</button>
			</div> */}
			<div className="thumbnail">
				<img alt="post-thumbnail" src="https://i.imgur.com/a7TZ0Yo.png"/>
			</div>
			<div className="post-info">
				<p className="post-title">{post.title}<span className="small-text light-text">(imgur.com)</span></p>
				<p className="post-added"><span className="light-text">submitted</span> {postAdded} <span className="light-text">by</span> <span className="poster">{post.user.username}</span></p>
				<p className="post-other"><span className="comments">0 Comments - c/{post.community.name}</span></p>
			</div>
		</div>
	)
}

export default Post