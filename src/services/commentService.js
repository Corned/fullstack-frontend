import axios from "axios"

const baseUrl = "/api/comment"
let token = null

const setToken = (newToken) => {
	token = `bearer ${newToken}`
}

const getAllComments = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const getAllCommentsByUser = async (username) => {
	const response = await axios.get(`${baseUrl}/u/${username}`)
	return response.data
}

const getCommentById = async (id) => {
	const response = await axios.get(`${baseUrl}/${id}`)
	return response.data
}

const getCommentsByPostId = async (id) => {
	const response = await axios.get(`${baseUrl}/post/${id}`)
	return response.data
}

const createComment = async (data, token_) => {
	const config = {
		headers: { "authorization": `bearer ${token_}` }
	}

	console.table(data)

	const response = await axios.post(baseUrl, data, config)
	return response.data
}

const deleteComment = async (id, token_) => {
	const config = {
		headers: { "authorization": `bearer ${token_}` }
	}

	const response = await axios.delete(`${baseUrl}/${id}`, config)
	return response.data
}


export default { 
	createComment,
	deleteComment,
	getAllComments, 
	getAllCommentsByUser,
	getCommentById, 
	getCommentsByPostId,
	setToken,
}