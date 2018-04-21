import React from "react"

import Link from "../Link"

const name = "Corned 643 points 7 hours ago"
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
	
				<div className="comment">
					<p className="secondary-text">[-] {name}</p>
					<p className="primary-text">
						{body}
					</p>
					<p className="tertiary-text"><b>{buttons}</b></p>
	
					<div className="comment">
						<p className="secondary-text">[-] {name}</p>
						<p className="primary-text">
							{body}
						</p>
						<p className="tertiary-text"><b>{buttons}</b></p>
					</div>
	
					<div className="comment">
						<p className="secondary-text">[-] {name}</p>
						<p className="primary-text">
							{body}
						</p>
						<p className="tertiary-text"><b>{buttons}</b></p>
	
						<div className="comment">
							<p className="secondary-text">[-] {name}</p>
							<p className="primary-text">
								{body}
							</p>
							<p className="tertiary-text"><b>{buttons}</b></p>
						</div>
					</div>
				</div>
	
				<div className="comment">
					<p className="secondary-text">[-] {name}</p>
					<p className="primary-text">
						{body}
					</p>
					<p className="tertiary-text"><b>{buttons}</b></p>
				</div>
			</div>
		)
	}
}


export default Comment