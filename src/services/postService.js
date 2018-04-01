import axios from "axios"

const baseUrl = "/api/post"
let token = null

const setToken = (newToken) => token = `bearer ${newToken}`

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const getAllFromCommunity = async (community) => {
	const response = await axios.get(`${baseUrl}/c/${community}`)
	return response.data
}


export default { getAll, getAllFromCommunity }