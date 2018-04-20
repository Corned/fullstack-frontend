import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import Comment from "./Comment"
import Loading from "../Loading"

import { getPostById, clearPost } from "../../reducers/postReducer"

import TimeSince from "../../utils/TimeSince"

class ExpandedPost extends React.Component {
	componentWillMount() {
		this.props.clearPost()
		const postId = this.props.history.location.pathname.split("/")[4]

		if (postId !== null) {
			this.props.getPostById(postId)
		}
	}

	render() {
		const post = this.props.post

		if (post === null) {
			return (
				<Loading 
					loadingMessage={"Loading post data.."}
					timeoutMessage={"Post not found :("}
					timeout={1500}
				/>
			)
		}

		post.date = TimeSince(post.date)

		return (
			<div>
				<div className="single-post frame">
					<div className="post" style={{ marginBottom: "1em" }}>
						<div className="post__thumbnail">
							<img alt="post-thumbnail" src="https://i.imgur.com/a7TZ0Yo.png"/>
						</div>
						<div className="post__info">
							<p className="post__title">{post.title}</p>
						</div>
					</div>

					{post.type === "text" ? 
						<p>{post.body}</p>
						:
						<a 
							href={post.url} 
							target="_blank" 
							rel="noopener noreferrer" 
						>{post.url}</a>
					}
				</div>
				<br/>
				<div id="comments" className="frame apply-margin--vertical">
					<h2>634 Comments</h2>
					<form className="apply-margin--vertical">
						<textarea 
							style={{
								width: "100%"
							}}
							rows="4"
							placeholder="Your blissful thoughts"
						></textarea>
						<button>Save?</button>
					</form>
					<p className="tertiary-text">
						comments go here thank you very much
					</p>

					<Comment/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"post": state.postData.current
	}
}

const mapDispatchToProps = { getPostById, clearPost }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ExpandedPost))
