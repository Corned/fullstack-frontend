import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import Comment from "./Comment"
import CommentForm from "../forms/CommentForm"
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
		const { post } = this.props

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
			<div className="apply-margin--vertical-xl">
				<div className="post card background-white" style={{ marginBottom: "1em" }}>
					<div className="post__thumbnail">
						<img alt="post-thumbnail" src="https://i.imgur.com/a7TZ0Yo.png"/>
					</div>
					<div className="post__info">
						<p className="post__title">{post.title}</p>
					</div>
				</div>

				<div className="card background-white">
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

				<div id="comments" className="card background-white apply-margin--vertical">
					<h2>{post.comments.length} comment{post.comments.length === 1 ? "" : "s"}</h2>

					<CommentForm post={post}/>

					<p className="tertiary-text">
						comments go here thank you very much
					</p>

					{post.comments.map((comment) => {
						if (comment.parent === null) {
							return (
								<Comment 
									comment={comment} 
									comments={post.comments}
								/>
							)
						}
					})}
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
