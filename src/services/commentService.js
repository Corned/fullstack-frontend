import axios from "axios"

const baseUrl = "/api/comment"

const getAllComments = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const getAllCommentsById = async (id) => {
	const response = await axios.get(`${baseUrl}/${id}`)
	return response.data
}

const getAllCommentsByUser = async (username) => {
	const response = await axios.get(`${baseUrl}/u/${username}`)
	return response.data
}

const createNewComment = async (data, token) => {
	const config = {
		headers: { "authorization": `bearer ${token}` }
	}

	const response = await axios.post(baseUrl, data, config)
	return response.data
}


export default { 
	createNewComment,
	getAllComments, 
	getAllCommentsById, 
	getAllCommentsByUser, 
}