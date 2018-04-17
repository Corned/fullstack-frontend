import React from "react"
import Link from "../Link"

const CommunityInformation = ({ community, setView }) => {
	const submitButtonUrl = `/c/${community.name}/`

	return (
		<div id="community-information" className="frame apply-margin--vertical">
			<h1>{community.name}</h1>
			<p className="secondary-text">{community.members.length} member{community.members.length === 1 ? "" : "s"}</p>

			<Link to={`${submitButtonUrl}submit-text`} onClick={setView("submit-text")}>
				<button style={{width: "100%"}}>Submit Your Thoughts</button>
			</Link>

			<Link to={`${submitButtonUrl}submit-link`} onClick={setView("submit-link")}>
				<button style={{width: "100%"}}>Share a Link</button>
			</Link>

			<button className="disabled" style={{width: "100%"}}>(Un)Subscribe!</button>
		</div>
	)
}

export default CommunityInformation