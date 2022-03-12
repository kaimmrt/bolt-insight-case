import axios from "axios"

const endPoint = `http://localhost:5000/post/`

export const fetchPosts = async () => await axios.get(endPoint)
export const createPost = async (data) => await axios.post(endPoint, data)
export const deletePost = async (data) => await axios.delete(endPoint + data)