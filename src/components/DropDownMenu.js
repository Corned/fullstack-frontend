import React from "react"

class DropDownMenu extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			expanded: false
		}
	}

	toggle = () => {
		this.setState({ expanded: !this.state.expanded })
	}

	render() {
		if (this.state.expanded === false) {
			return (
				<div className="dropdownmenu">
					<button className="toggle no-select closed" onMouseOver={this.toggle}>{this.props.text}</button>
					<div className="content closed">
						{this.props.children}
					</div>
				</div>
			)
		}

		return (
			<div className="dropdownmenu" onMouseLeave={this.toggle}>
				<button className="toggle no-select opened">{this.props.text}</button>
				<div className="content opened">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default DropDownMenu