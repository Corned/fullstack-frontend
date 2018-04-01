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
				<button className="toggle opened no-select frame">{this.props.text}</button>
				<div className="content frame">
					{this.props.children}
				</div>
			</div>
		)
	}
}


const Sidebar = () => {
	return (
		<div id="topbar">
			<div id="topbar-container">
				<DropDownMenu text={"Your Subscriptions"}>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
					<p>Cordial-Meta</p>
				</DropDownMenu>
			</div>
		</div>
	)
}

export default Sidebar