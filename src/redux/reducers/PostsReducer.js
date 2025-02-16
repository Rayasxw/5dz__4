import { types } from "../types/types"

const initialState = {
    posts: [],
    post: []
}

export default function PostsReducer(state = initialState, action) {
    switch (action.type) {
        case types.POST:
            return {
                ...state,
                posts: action.payload
            }
        case types.POST_DETAILS:
            return {
                ...state,
                post: Array.isArray(action.payload) ? action.payload : [action.payload]
            }
        default:
            return state
    }
}