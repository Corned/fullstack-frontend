import axios from "axios"

const baseUrl = "/api/post"

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const create = async () => {

	// const response = await axios.post(baseUrl, newCommunity)
	return "lol"
}

export default { getAll, create }