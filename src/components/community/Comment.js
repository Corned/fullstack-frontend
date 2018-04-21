import React from "react"

import Link from "../Link"

const name = "Trioxide 0 points 2 hours ago"
const body = "Sellane äppi mihin vois tallentaa erilaisia vinkkejä niinku kirjavinkkei ja elokuvavinkkei"
const buttons = "reply"

class Comment extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			collapsed: false
		}
	}

	toggle = () => {
		this.setState({ collapsed: !this.state.collapsed })
	}

	render() {
		//const {author, body, replies} = this.props.comment

		if (this.state.collapsed) {
			return (
				<div className="comment">
					<p className="secondary-text">[<span className="clickable" onClick={this.toggle}>+</span>] {name}</p>
				</div>
			)
		}

		return (
			<div className="comment">
				<p className="secondary-text">[<span className="clickable" onClick={this.toggle}>-</span>] {name}</p>
				<p className="primary-text">
					{body}
				</p>
				<p className="tertiary-text"><b>{buttons}</b></p>

			</div>
		)
	}
}


export default Comment
