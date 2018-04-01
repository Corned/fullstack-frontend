import React from "react"

const Banner = ({ communityName }) => {
	return (
		<div id="banner">
			<img className="no-select" src="https://i.imgur.com/cuF3Tp7.jpg" alt="banner"/>
			<div className="no-select" id="banner-text">{ communityName }</div>
			<div className="inset-image-shadow"/>
		</div>
	)
}
				
export default Banner