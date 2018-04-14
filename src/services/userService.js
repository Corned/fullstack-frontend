import axios from "axios"

const baseUrl = "/api/user"

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const getById = async (id) => {
	const response = await axios.get(`${baseUrl}/${id}`)
	return response.data
}

const create = async (data) => {
	const response = await axios.post(baseUrl, data)
	return response.data
}


export default { getAll, create, getById }