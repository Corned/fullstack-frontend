import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import Comment from "./Comment"
import CommentForm from "../forms/CommentForm"
import Loading from "../Loading"
import Post from "./Post"

import { getCommentsByPostId } from "../../reducers/commentReducer"
import { getPostById, clearPost } from "../../reducers/postReducer"

class ExpandedPost extends React.Component {
	componentWillMount() {
		this.props.clearPost()
		const postId = this.props.history.location.pathname.split("/")[4]

		if (postId !== null) {
			this.props.getPostById(postId)
			this.props.getCommentsByPostId(postId)
		}
	}

	render() {
		const { post, comments } = this.props

		if (post === null) {
			return (
				<Loading 
					loadingMessage={"Loading post data.."}
					timeoutMessage={"Post not found :("}
					timeout={1500}
				/>
			)
		}

		return (
			<div className="apply-margin--vertical-xl">
				<Post post={post}/>

				<div className="card background-white">
					{post.type === "text" && (
						<p>{post.body}</p>
					)}

					{post.type !== "text" && (
						<a 
							href={post.url} 
							target="_blank" 
							rel="noopener noreferrer" 
						>{post.url}</a>
					)}
				</div>

				<div id="comments" className="card background-white apply-margin--vertical">
					<h2>{comments.length} comment{comments.length !== 1 && "s"}</h2>

					<CommentForm post={post}/>

					{comments.map((comment) => {
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
		"comments": state.commentData.list,
		"post": state.postData.current
	}
}

const mapDispatchToProps = { getPostById, clearPost, getCommentsByPostId }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ExpandedPost))
