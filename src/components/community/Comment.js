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
		this.setState({ 
			collapsed: newState || !this.state.collapsed,
			showReplyForm: false
		})
	}

	toggleReply = (newState) => {
		this.setState({ 
			showReplyForm: newState || !this.state.showReplyForm 
		})
	}

	showDeleteButton = () => {
		const { comment, community, loggedUser } = this.props

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
		const {author, body, replies, post, parent, date, deleted} = this.props.comment
		const comments = this.props.comments
		
		if (this.state.collapsed) {
			return (
				<div className="comment card">
					<p className="secondary-text">
						<span>
							[<span className="clickable clickable--goldenrod" onClick={this.toggleCollpase}>+</span>]&nbsp;
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
								<Conditional
									render={this.showDeleteButton()}
								><span className="clickable clickable--warn">delet this</span>&nbsp;</Conditional>
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

				<CommentContainer parent={this.props.comment.id}/>
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
