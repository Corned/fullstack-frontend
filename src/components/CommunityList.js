import React from "react"
import FlatList from "./FlatList"

const CommunityList = ({children}) => {
	return (
		<div className="communities">
			<FlatList>
				<p className="flat-list-item">Popular</p>
				<p className="flat-list-item">All</p>
				<p className="flat-list-item">Random</p>
			</FlatList>

			<p className="flat-list-divider">|</p>

			<FlatList>
				{children}
			</FlatList>
		</div>
	)
}

export default CommunityList