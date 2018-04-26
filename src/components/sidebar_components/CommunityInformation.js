import React from "react"
import Link from "../Link"

const CommunityInformation = ({ community, setView }) => {
	const submitButtonUrl = `/c/${community.name}/`

	return (
		<div id="community-information" className="card background-white apply-margin--vertical">
			<h1>{community.name}</h1>
			<p className="secondary-text">{community.members.length} member{community.members.length === 1 ? "" : "s"}</p>

			<div>
				<Link to={`${submitButtonUrl}submit-text`} onClick={setView("submit-text")}>
					<button>Submit Your Thoughts</button>
				</Link>
			</div>

			<div>
				<Link to={`${submitButtonUrl}submit-link`} onClick={setView("submit-link")}>
					<button>Share a Link</button>
				</Link>
			</div>

			<button className="disabled">(Un)Subscribe!</button>
		</div>
	)
}

export default CommunityInformation