import React from "react"
import Post from "./Post"

const PostList = ({ posts }) => {
	return (
		<div id="post-list" className="drop-shadow fill">
			{posts.data.map((post) => <Post key={post.id} post={post}/>)}
		</div>
	)
}

export default PostList