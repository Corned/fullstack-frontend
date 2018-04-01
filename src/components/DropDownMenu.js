import React from "react"

class DropDownMenu extends React.Component {
	constructor() {
		super()

		this.state = {
			open: false
		}
	}

	toggle = () => {
		this.setState({ open: !this.state.open })
	}

	render() {
		if (this.state.open === false) {
			return (
				<div className="dropdownmenu">
					<button className="toggle no-select" onMouseOver={this.toggle}>{this.props.text}</button>
				</div>
			)
		}

		return (
			<div className="dropdownmenu" onMouseLeave={this.toggle}>
				<button className="toggle opened no-select frame open">{this.props.text}</button>
				<div className="content frame">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default DropDownMenu