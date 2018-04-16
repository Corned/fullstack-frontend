import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

const CommunityNavigation = ({ action, currentView, labels, baseUrl}) =>  {	
	return (
		<div id="navigation" className="frame flex flex--horizontal flex--center apply-margin--horizontal">
			{
				labels.map((label, index) => {
					const destination = `${baseUrl}/${label}`

					if (label === currentView) {
						return (
							<Link key={index} to={destination} onClick={action(label)}>
								<p className="button selected">{label}</p>
							</Link>
						)
					}

					return (
						<Link key={index} to={destination} onClick={action(label)}>
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
