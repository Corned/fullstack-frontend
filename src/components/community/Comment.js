import React from "react"
import { Link } from "react-router-dom"

import CommentForm from "../forms/CommentForm"
import Voting from "../Voting"

import TimeSince from "../../utils/TimeSince"

const deletedMessage = "[REMOVED]"

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
		const {author, body, replies, post, parent, date, deleted} = this.props.comment
		const comments = this.props.comments
		
		if (this.state.collapsed) {
			return (
				<div className="comment card">
					<p className="secondary-text">
						<span>
							[<span className="clickable clickable--goldenrod" onClick={this.toggle}>+</span>]&nbsp;
							{deleted && deletedMessage}
							{!deleted && <Link className="clickable clickable--goldenrod" to={`/u/${author.username}`}>{author.username}</Link>}
							&nbsp;- 0 points - Submitted {TimeSince(date)}
						</span>
					</p>
				</div>
			)
		}

		return (
			<div className="comment card">
				<div className="flex flex--horizontal">
					<Voting/>
					<div>
						<p className="secondary-text">
							<span>
								[<span className="clickable clickable--goldenrod" onClick={this.toggle}>-</span>]&nbsp;
								{deleted && deletedMessage}
								{!deleted && <Link className="clickable clickable--goldenrod" to={`/u/${author.username}`}>{author.username}</Link>}
								&nbsp;- 0 points - Submitted {TimeSince(date)}
							</span>
						</p>					
						<p className="primary-text">
							{deleted && deletedMessage}
							{!deleted && body}
						</p>
						<p className="tertiary-text">
							<b>					
								<span className="clickable clickable--goldenrod" onClick={this.toggleReply}>reply</span>&nbsp;
								<span className="clickable clickable--warn">delete</span>&nbsp;
							</b>
						</p>
					
					</div>
				</div>

				{this.state.showReplyForm && (
					<CommentForm 
						post={post} 
						comment={this.props.comment}
					/>
				)}

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
