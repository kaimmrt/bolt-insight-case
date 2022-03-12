import * as types from './types'
import * as api from '../../../networking'

export const fetchPosts = () => async (dispatch) => {
    try {
        const response = await api.fetchPosts()
        dispatch({
            type: types.FETCH_POSTS,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)

        dispatch({
            type: types.CREATE_POSTS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const filterPost = (data) => ({
    type: types.FILTER_POSTS,
    payload: data
})

export const deletePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.deletePost(id)
        dispatch({
            type: types.DELETE_POST,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}