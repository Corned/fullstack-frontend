import React from "react"
import { Link as ReactLink } from "react-router-dom"

const Link = (props) => {
	return (
		<ReactLink to={props.to}>
			{props.children}
		</ReactLink>
	)
}

export default Link