import axios from "axios"

const baseUrl = "/api/community"
//let token = null

//const setToken = (newToken) => token = `bearer ${newToken}`

const getAllCommunities = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const getCommunityByName = async (name) => {
	const response = await axios.get(`${baseUrl}/${name}`)
	return response.data
}

const createCommunity = async (data, token) => {
	const config = {
		headers: { "authorization": `bearer ${token}` }
	}
	
	const response = await axios.post(baseUrl, data, config)
	return response.data
}

export default { 
	createCommunity,
	getAllCommunities, 
	getCommunityByName
}