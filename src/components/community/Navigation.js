import React from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'

import DropDownMenu from "../DropDownMenu"

import { setLocation, setSort } from "../../reducers/navigationReducer"

class CommunityNavigation extends React.Component {	
	render() {	
		const navigationLabels = [ "hot", "new", "controversial", "top", "wiki" ]

		return (
			<div id="community-navigation" className="frame drop-shadow">
				{
					navigationLabels.map((label, index) => {
						if (label === this.props.view) {
							return <p key={index} onClick={this.props.setView(label)} className="button selected-button">{label}</p>
						}

						return <p key={index} onClick={this.props.setView(label)} className="button">{label}</p>
					}
				)}
			</div>	
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"navigation": state.navigation
	}
}

const mapDispatchToProps = { setLocation, setSort }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CommunityNavigation))
