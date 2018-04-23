import React from "react"

import CommentForm from "../forms/CommentForm"
import Link from "../Link"
const buttons = "reply"

class Comment extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			collapsed: false,
			showReplyForm: false
		}
	}

	toggle = () => {
		this.setState({ 
			collapsed: !this.state.collapsed,
			showReplyForm: false
		})
	}

	toggleReply = () => {
		this.setState({ showReplyForm: !this.state.showReplyForm })
	}

	render() {
		const {author, body, replies, post, parent} = this.props.comment
		const comments = this.props.comments
		
		if (this.state.collapsed) {
			return (
				<div className="comment">
					<p className="secondary-text">[<span className="clickable" onClick={this.toggle}>+</span>] {author.username} 0 points 2 hours ago</p>
				</div>
			)
		}

		return (
			<div className="comment">
				<p className="secondary-text">[<span className="clickable" onClick={this.toggle}>-</span>] {author.username} 0 points 2 hours ago</p>
				<p className="primary-text">
					{body}
				</p>
				<p className="tertiary-text">
					<b>					
						<span className="clickable" onClick={this.toggleReply}>reply</span>
					</b>
				</p>

				{this.state.showReplyForm ? 
					<CommentForm 
						post={post} 
						comment={this.props.comment}
					/>
					: null	
				}

				{comments.map((comment) => {
					if (replies.includes(comment._id)) {
						return (
							<Comment 
								comment={comment} 
								comments={comments}
							/>
						)
					}
				})}

			</div>
		)
	}
}


export default Comment
