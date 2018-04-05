import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

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
				community: this.props.community.current.name
			}, this.props.userdata.token)

			this.props.history.push(`/c/${this.props.community.current.name}/post/${this.props.posts.post._id}`)
		} catch (exception) {
			console.log(exception, "!!!!")
		}
	}

	render() {
		return (
			<div className="frame submit">
				<h1>Textpost</h1>
				<p className="description" style={{ fontSize: "1.2em" }}>You're about to share a text- to share a text-based post. </p>
				<br/>
				<form onSubmit={this.submit}>
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
		"community": state.community,
		"userdata": state.userdata,
		"posts": state.posts
	}
}

const mapDispatchToProps = { createPost }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TextForm))
