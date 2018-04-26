import React from "react"

import Loading from "../Loading"
import Post from "./Post"

const PostList = ({ postList }) => {
	if (postList.length === 0) {
		return (
			<Loading 
				loadingMessage="loading data"
				timeoutMessage=":("
				timeout={1500}
			/>
		)
	}

	return (
		<div id="post-list" className="background-white fill">
			{postList.map((post) => <Post key={post.id} post={post}/>)}
		</div>
	)
}



export default PostList
