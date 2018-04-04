import axios from "axios"

const baseUrl = "/api/community"
let token = null

const setToken = (newToken) => token = `bearer ${newToken}`

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const getByName = async (name) => {
	const response = await axios.get(`${baseUrl}/${name}`)
	return response.data
}

const create = async (name) => {
	const config = {
		headers: { "Authorization": token }
	}
	
	const response = await axios.post(baseUrl, { name }, config)
	return response.data
}

export default { setToken, getAll, getByName, create }