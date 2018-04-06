import React from "react"
import { Link as ReactLink } from "react-router-dom"

const Link = (props) => {
	return (
		<div className="link">
			<ReactLink to={props.to}>
				{props.children}
			</ReactLink>
		</div>
	)
}

export default Link