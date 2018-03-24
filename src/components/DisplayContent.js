import react from "react"

const DisplayContent = ({ display, children }) => {
	if (display === false) {
		return null
	}

	return children
}

export default DisplayContent