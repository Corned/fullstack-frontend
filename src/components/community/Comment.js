import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import CommentContainer from "./CommentContainer"
import CommentForm from "../forms/CommentForm"
import Conditional from "../Conditional"
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

	toggleCollapse = (newState) => {
		return () => {
			this.setState({ 
				collapsed: newState || !this.state.collapsed,
				showReplyForm: false
			})
		}
	}

	toggleReply = (newState) => {
		return () => {
			this.setState({ 
				showReplyForm: newState || !this.state.showReplyForm 
			})
		}
	}

	showDeleteButton = () => {
		const { comment, community, loggedUser } = this.props

		if (comment.deleted === true) {
			return false
		}

		if (loggedUser === null) {
			return false
		}

		if (loggedUser._id === comment.author._id) {
			return true;
		}

		for (let index in community.moderators) {
			const moderator = community.moderators[index]
			if (loggedUser._id === moderator._id) {
				return true;
			}
		}

		return false
	}

	render() {
		const { comment, comments, deleteComment } = this.props
		const { author, body, date, deleted, id, parent, post, replies } = this.props.comment
		
		if (this.state.collapsed) {
			return (
				<div className="comment card">
					<p className="secondary-text">
						<span>
							[
								<span 
									className="clickable clickable--goldenrod" 
									onClick={this.toggleCollapse()}
								>+</span>
							]&nbsp;

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
								[
									<span 
										className="clickable clickable--goldenrod" 
										onClick={this.toggleCollapse()}
									>-</span>
								]&nbsp;

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
								<span className="clickable clickable--goldenrod" onClick={this.toggleReply()}>reply</span>&nbsp;
								<Conditional render={this.showDeleteButton()}>
									{!deleted && 
										<span 
											className="clickable clickable--warn"
											onClick={deleteComment(id)}
										>delete</span>
									}
								</Conditional>
							</b>
						</p>
					
					</div>
				</div>

				{this.state.showReplyForm && (
					<CommentForm 
						post={post} 
						comment={comment}
					/>
				)}

				<CommentContainer parent={id}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"comments": state.commentData.list,
		"community": state.communityData.current,
		"loggedUser": state.loggedUserData.user
	}
}

export default connect(mapStateToProps, null)(Comment)
