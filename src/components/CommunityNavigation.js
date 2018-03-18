import React from "react"

const CommunityNavigation = () => {
	return (
		<div className="frame" id="community-navigation">
			<p className="community-navigation-button selected-community-navigation-button">Hot</p>
			<p className="community-navigation-button">New</p>
			<p className="community-navigation-button">Rising</p>
			<p className="community-navigation-button">Controversial</p>
			<p className="community-navigation-button">Top</p>
			<p className="community-navigation-button">Gilded</p>
			<p className="community-navigation-button">Wiki</p>
		</div>	
	)
}

export default CommunityNavigation