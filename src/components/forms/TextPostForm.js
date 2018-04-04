import React from "react"

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

	submit = (event) => {
		event.preventDefault()

		console.log(this.state)
	}

	render() {
		return (
			<div className="frame submit">
				<h1>Textpost</h1>
				<p>You're about to share a text-based post.</p>
				<form onSubmit={this.submit}>
					<h2>Title</h2>
					<input 
						className=""
						type="text" 
						name="username" 
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

export default TextForm
