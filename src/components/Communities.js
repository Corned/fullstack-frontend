import React from "react"

const Communities = ({children}) => {
	return (
		<div className="frame" id="communities">
			<p className="select-community">Popular</p>
			<p className="select-community">All</p>
			<p className="select-community">Random</p>

			<div className="select-community-divider">
			</div>

			<div>
				{children}
			</div>
		</div>
	)
}

export default Communities