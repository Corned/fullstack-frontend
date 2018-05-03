import react from "react"

const Conditional = ({ render, children }) => {
	if (!render) return null

	return [children]
}

export default Conditional