import React from "react"
import { connect } from "react-redux"

import Loading from "../Loading"
import Post from "./Post"

const PostList = (props) => {
	return (
		<div id="post-list" className="fill apply-margin--vertical">
			{props.postList.map((post) => <Post key={post.id} post={post}/>)}
		</div>
	)
}

const mapStateToProps = (state) => {
	return { 
		"community": state.communityData.current
	}
}

export default connect(mapStateToProps, null)(PostList)
