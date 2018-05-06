import React, { Component } from "react"
import { connect } from "react-redux"

import Comment from "./Comment"

/*

	CommentContainer

	Renders all comments which have no parents.

*/

class CommentContainer extends Component {
	render() {
		let { comments, parent } = this.props
		parent = parent === undefined ? null : parent

		return (
			comments.map((comment) => {
				if (comment.parent === parent) {
					return (
						<Comment 
							comment={comment}
						/>
					)
				}
			})
		)
	}
}
const mapStateToProps = (state) => {
	return { 
		"comments": state.commentData.list
	}
}

export default connect(mapStateToProps)(CommentContainer)
