import React from "react"
import { connect } from "react-redux"

import Post from "./Post"

class PostList extends React.Component {
	render() {
		if (this.props.community.posts === undefined) {
			return null
		}
		
		return (
			<div id="post-list" className="drop-shadow fill">
				{this.props.posts.map((post) => <Post key={post.id} post={post}/>)}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"community": state.community,
		"posts": state.posts
	}
}

export default connect(mapStateToProps, null)(PostList)
