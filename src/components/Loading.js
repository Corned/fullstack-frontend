import React from "react"

class Loading extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			message: props.loadingMessage || "Loading content.."
		}
	}

	render() {
		setTimeout(() => {
			this.setState({
				message: this.props.timeoutMessage || "Timeout"
			})
		}, this.props.timeout || 1500)

		return (
			<div className="frame loading">
				<p>{this.state.message}</p>
			</div>
		)
	}
}

export default Loading