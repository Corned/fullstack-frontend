import React from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'

import DropDownMenu from "../DropDownMenu"

import { setLocation, setSort } from "../../reducers/navigationReducer"

class CommunityNavigation extends React.Component {	
	
	componentWillMount() {
	/*	const results = /\/c\/.*\//g.exec(this.props.history.location.pathname)
		if (results.length === 0) {
			this.props.setLocation(null)
			return
		}

		this.props.setLocation(results[0].substring(3, results[0].length - 1))
		if (this.props.navigation.sort === null) {
			this.props.setSort("hot")
		}*/
	}

	handleSelect = (sort) => {
		return () => {
			//this.props.history.push(`/c/${this.props.navigation.location}/${sort}`)
			//this.props.setSort(sort)
		}
	}

	render() {	
		const navigationLabels = [ "hot", "new", "controversial", "top", "gilded" ]

		return (
			<div id="community-navigation" className="frame drop-shadow">
				{
					navigationLabels.map((label, index) => {
						/* if (label === this.props.navigation.sort) {
							return <p key={index} onClick={this.handleSelect(label)} className="button selected-button">{label}</p>
						} */

						return <p key={index} onClick={this.handleSelect(label)} className="button">{label}</p>
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
