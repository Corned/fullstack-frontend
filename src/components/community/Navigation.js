import React from "react"
import { withRouter } from 'react-router-dom'

import DropDownMenu from "../DropDownMenu"

class CommunityNavigation extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			community: props.community,
			sort: "hot"
		}
	}

	handleSelect = (sort) => {
		return () => {
			this.props.history.push(`/c/${this.state.community}/${sort}`)

			this.setState({	sort })
		}
	}

	render() {	
		const navigationLabels = [ "hot", "new", "controversial", "top", "gilded", "wiki" ]

		return (
			<div id="community-navigation" className="frame drop-shadow">
				{navigationLabels.map((label, index) => {
					console.log(label, this.state.sort)
					if (label === this.state.sort) {
						return <p key={index} onClick={this.handleSelect(label)} className="button selected-button">{label}</p>
					}

					return <p key={index} onClick={this.handleSelect(label)} className="button">{label}</p>
				}
				)}
			</div>	
		)
	}
}

export default withRouter(CommunityNavigation)