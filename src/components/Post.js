import React from "react"

const Post = ({ title }) => {
	return (
		<div className="post">
			<div className="voting"></div>
			<img className="thumbnail" alt="lol" src="https://i.imgur.com/BC6S0sn.png"/>
			<div className="post-info">
				<p className="post-title">{title}<span className="post-source">(imgur.com)</span></p>
				<p className="post-added">posted 4 hours ago by <span className="poster">Corned</span></p>
				<p className="post-other"><span className="comments">74 comments</span> <span className="share">share</span> <span className="save">save</span></p>
			</div>
		</div>
	)
}

export default Post