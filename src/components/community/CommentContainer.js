import React, { Component } from "react"
import { connect } from "react-redux"

import Comment from "./Comment"

import { deleteComment } from "../../reducers/commentReducer"

/*

	CommentContainer

	Renders all comments which have no parents.

*/

class CommentContainer extends Component {

	deleteComment = (id) => {
		return async () => {
			try {
				await this.props.deleteComment(id, this.props.loggedUserData.token)
			} catch (exception) {
				console.log(exception.response.data)
			}
		}
	}


	render() {
		let { comments, parent } = this.props
		parent = parent === undefined ? null : parent

		return (
			comments.map((comment) => {
				if (comment.parent === parent) {
					return (
						<Comment 
							key={comment.id}
							comment={comment}
							deleteComment={this.deleteComment}
						/>
					)
				}

				return null
			})
		)
	}
}
const mapStateToProps = (state) => {
	return { 
		"comments": state.commentData.list,
		"loggedUserData": state.loggedUserData
	}
}

const mapDispatchToProps = { deleteComment }

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)
