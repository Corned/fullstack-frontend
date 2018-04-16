import React from "react"
import { connect } from "react-redux"
import { withRouter, Redirect } from "react-router-dom"

import { createPost } from "../../reducers/postReducer"

class TextForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: "",
			body: ""
		}
	}

	textFieldHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	submit = async (event) => {
		event.preventDefault()

		try {
			await this.props.createPost({
				title: this.state.title,
				body: this.state.body,
				type: "text",
				community: this.props.community.name
			}, this.props.loggedUserData.token)

			this.props.history.push(`/c/${this.props.community.name}/post/${this.props.post._id}`)
		} catch (exception) {
			console.log(exception, "!!!!")
		}
	}

	render() {
		if (this.props.loggedUserData.user === null) {
			return (
				<Redirect to={`/login?redirect=${this.props.history.location.pathname}`}/>
			)
		}

		return (
			<div className="frame submit apply-margin--vertical">
				<h1>Textpost</h1>
				<p className="primary-text">You're about to share a text- to share a text-based post. </p>
				<br/>
				<form onSubmit={this.submit} className="apply-margin--vertical">
					<h2>Title</h2>
					<input 
						className=""
						type="text" 
						name="title" 
						placeholder="Title"
						value={this.state.title}
						autoComplete="off"
						onChange={this.textFieldHandler}
					/>
					<h2>Body</h2>
					<textarea 
						rows="10"
						type="text" 
						name="body" 
						placeholder="Body"
						value={this.state.body}
						autoComplete="off"
						onChange={this.textFieldHandler}
					></textarea>
					<button 
						type="submit"
					>Submit</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"community": state.communityData.current,
		"loggedUserData": state.loggedUserData,
		"post": state.postData.current
	}
}

const mapDispatchToProps = { createPost }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TextForm))
