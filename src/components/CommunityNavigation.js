import React from "react"

const CommunityNavigation = () => {
	return (
		<div className="frame" id="community-navigation">
			<div className="community-navigation-button selected-community-navigation-button">Hot</div>
			<div className="community-navigation-button">New</div>
			<div className="community-navigation-button">Rising</div>
			<div className="community-navigation-button">Controversial</div>
			<div className="community-navigation-button">Top</div>
			<div className="community-navigation-button">Gilded</div>
			<div className="community-navigation-button">Wiki</div>
		</div>	
	)
}

export default CommunityNavigation