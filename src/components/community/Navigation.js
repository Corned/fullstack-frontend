import React from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

import DropDownMenu from "../DropDownMenu"

const CommunityNavigation = ({ view, setView, community }) =>  {	
	const navigationLabels = [ "hot", "new", "controversial", "top", "wiki" ]
	const url = `/c/${community.name}/`

	return (
		<div id="community-navigation" className="frame flex flex--horizontal flex--center apply-margin--horizontal">
			{
				navigationLabels.map((label, index) => {
					const destination = `${url}${label}`

					if (label === view) {
						return (
							<Link key={index} to={destination} onClick={setView(label)}>
								<p className="button selected">{label}</p>
							</Link>
						)
					}

					return (
						<Link key={index} to={destination} onClick={setView(label)}>
							<p className="button">{label}</p>
						</Link>
					)
				})
			}
		</div>	
	)
}

const mapStateToProps = (state) => {
	return { 
		"community": state.communityData.current
	}
}

export default connect(mapStateToProps, null)(CommunityNavigation)
