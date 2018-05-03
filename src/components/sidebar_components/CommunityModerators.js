import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const CommunityRules = ({ moderators }) => {
	return (
		<div id="community-rules" className="card background-white apply-margin--vertical">
			<h1>Moderators</h1>
			{moderators.map((moderator) =>
				<Link 
					to={`/u/${moderator.username}`}
					key={moderator._id} 
					className="primary-text clickable clickable--goldenrod"
				>u/{moderator.username}</Link>
			)}
		</div>
	)
}

const mapStateToProps = (state) => {
	return { 
		"moderators": state.communityData.current.moderators
	}
}

export default connect(mapStateToProps, null)(CommunityRules)