import axios from "axios"

const baseUrl = "/api/post"

const getAllPosts = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const getPostById = async (id) => {
	const response = await axios.get(`${baseUrl}/${id}`)
	return response.data
}

const getAllPostsByCommunity = async (community) => {
	const response = await axios.get(`${baseUrl}/c/${community}`)
	return response.data
}

const getAllPostsByUser = async (username) => {
	const response = await axios.get(`${baseUrl}/u/${username}`)
	return response.data
}

const createPost = async (data, token) => {
	const config = {
		headers: { "authorization": `bearer ${token}` }
	}

	const response = await axios.post(baseUrl, data, config)
	return response.data
}


export default { 
	createPost,
	getAllPosts, 
	getAllPostsByCommunity, 
	getAllPostsByUser, 
	getPostById
 }