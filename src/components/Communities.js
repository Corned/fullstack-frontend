import React from "react"
import { connect } from "react-redux"

const Communities = (props) => {
	let navigate = (destination) => {
		return () => {
			console.log(destination)
		}
	}

	return (
		<div className="frame" id="communities">
			<p className="select-community" onClick={navigate("/")}>Popular</p>
			<p className="select-community" onClick={navigate("/c/all")}>All</p>
			<p className="select-community" onClick={navigate("/c/random")}>Random</p>
			{ props.communities.length >= 0 ? null 
				: 
				<div id="my-communities">
					<div className="select-community-divider"/>			
					<div>
						{props.communities.map((community, index) =>
							<p 
								key={index} 
								className="select-community"
								onClick={navigate(`/c/${community}`)}
							>{community}</p>
						)}
					</div>
				</div>

			}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		"communities": state.communities
	}
}

export default connect(mapStateToProps, null)(Communities)