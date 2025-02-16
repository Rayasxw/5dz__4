import { types } from "../types/types"

export function post(data) {
    return {
        type: types.POST,
        payload: data
    }
}

export function featchData() {
    return async (dispatch) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            dispatch(post(data))
        } catch (e) {
            console.log(e)
        }
    }
}

export function postDetails(data) {
    return {
        type: types.POST_DETAILS,
        payload: data
    }
}

export function featchDataDetails(id) {
    return async (dispatch) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            dispatch(postDetails(data))
        } catch (e) {
            console.log(e)
        }
    }
}
