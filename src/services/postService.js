import axios from "axios"

const baseUrl = "/api/post"

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const getById = async (id) => {
	const response = await axios.get(`${baseUrl}/${id}`)
	return response.data
}

const getAllFromCommunity = async (community) => {
	const response = await axios.get(`${baseUrl}/c/${community}`)
	return response.data
}

const getAllFromUser = async (username) => {
	const response = await axios.get(`${baseUrl}/u/${username}`)
	return response.data
}

const create = async (data, token) => {
	const config = {
		headers: { "authorization": `bearer ${token}`  }
	}

	const response = await axios.post(baseUrl, data, config)
	return response.data
}


export default { getAll, getAllFromCommunity, create, getById }