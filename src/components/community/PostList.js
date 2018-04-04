import React from "react"
import { connect } from "react-redux"

import Post from "./Post"

class PostList extends React.Component {
	constructor() {
		super()

		this.state = {
			loadingMessage: "Loading content..."
		}
	}

	isEmpty = () => {
		setTimeout(() => {
			this.setState({
				loadingMessage: "There's nothing here... :("
			})
		}, 1000)
	}

	render() {
		if (this.props.community.posts === undefined) {
			this.isEmpty()
			return (
				<div id="post-list" className="frame">
					<h2 style={{width: "100%", textAlign: "center"}}>{this.state.loadingMessage}</h2>
				</div>
			)
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
		"posts": state.posts.postList
	}
}

export default connect(mapStateToProps, null)(PostList)
