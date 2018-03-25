import React from "react"

const CommunityNavigation = () => {
	return (
		<div id="community-navigation" className="frame drop-shadow">
			<p className="button">Hot</p>
			<p className="button selected-button">New</p>
			{/* <p className="button">Rising</p> */ }
			<p className="button">Controversial</p>
			<p className="button">Top</p>
			{/* <p className="button">Gilded</p> */ }
			<p className="button">Wiki</p>
		</div>	
	)
}

export default CommunityNavigation