import * as types from '../../actions/post/types'

const initialState = {
    posts: [],
    filteredPost: []
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS:
            return {
                ...state,
                posts: action.payload,
                filteredPost: action.payload
            }
        case types.CREATE_POSTS:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                filteredPost: [action.payload, ...state.posts]
            }

        case types.FILTER_POSTS:
            const value = action.payload
            const filteredValues = state.posts.filter(post => {
                return post.title.toLowerCase().includes(value)
            })

            return {
                ...state,
                filteredPost: action.payload === "" ? state.posts : filteredValues
            }
        case types.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(value => value._id !== action.payload._id),
                filteredPost: state.posts.filter(value => value._id !== action.payload._id)
            }
        default: {
            return { ...state }
        }
    }
}

export default postReducer