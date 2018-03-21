import axios from "axios"

const baseUrl = "/api/community"

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const create = async (name, user) => {
	const newCommunity = {
		name,
		"moderators": [ user ],
		"pinnedposts": [],
		"posts": [],
		"creationDate": new Date()
	}

	const response = await axios.post(baseUrl, newCommunity)
	return response.data
}

export default { getAll, create }