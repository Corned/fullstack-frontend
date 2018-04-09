import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { createPost } from "../../reducers/postReducer"

class LinkForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: "",
			url: ""
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
				url: this.state.url,
				type: "link",
				community: this.props.community.current.name
			}, this.props.userdata.token)

			this.props.history.push(`/c/${this.props.community.current.name}/post/${this.props.posts.post._id}`)
		} catch (exception) {
			console.log(exception, "!!!!")
		}
	}

	render() {
		return (
			<div className="frame submit apply-margin--vertical">
				<h1>Linkpost</h1>
				<p className="primary-text">You're about to share a link.</p>
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
					<h2>Link</h2>
					<input 
						rows="10"
						type="text" 
						name="link" 
						placeholder="Link"
						value={this.state.link}
						autoComplete="off"
						onChange={this.textFieldHandler}
					/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LinkForm))
