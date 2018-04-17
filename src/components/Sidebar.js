import React from "react"
import { connect } from "react-redux"

const Sidebar = ({ children }) => {
	return (
		<div id="sidebar" className="apply-margin--vertical-xl">
			{children}
		</div>
	)
}

export default Sidebar
