import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import Link from "../Link"

import { createComment } from "../../reducers/commentReducer"

class CommunityForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			error: "",
			body: ""
		}
	}

	textFieldHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	submit = async (event) => {
		event.preventDefault()

		try {

			console.log(this.props.post)

			await this.props.createComment({
				body: this.state.body,
				post: this.props.post,
				parent: this.props.comment
			}, this.props.loggedUserData.token)
		} catch (exception) {
			if (exception.response && exception.response.data && exception.response.data.error) {
				this.setState({ error: exception.response.data.error })
			} else {
				console.log(exception)
			}
		}
	}

	render() {
		if (this.props.loggedUserData.user === null) {
			return (
				<p className="error">
					Must be logged in to comment.&nbsp;
					<Link to={`/login?redirect=${this.props.history.location.pathname}`}>>
						<span className="clickable">Click here to log in.</span>
					</Link>
				</p>
			)
		}

		return (
			<div className="apply-margin--vertical">
				<p className="error">{this.state.error}</p>

				<form onSubmit={this.submit} className="apply-margin--vertical">
					<textarea
						autoComplete="off"
						className=""
						name="body" 
						onChange={this.textFieldHandler}
						placeholder="Your blissful thoughts"
						rows="4"
						style={{ width: "100%" }}
						type="text" 
						value={this.state.body}
					></textarea>
					<button>Save?</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"community": state.communityData.current,
		"loggedUserData": state.loggedUserData,
	}
}

const mapDispatchToProps = { createComment }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CommunityForm))
