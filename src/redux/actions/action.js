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
        }catch (e) {
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
        }catch (e) {
            console.log(e)
        }
    }
}

export function formSubmitSuccess(result) {
    return {
        type: types.SUCCESS,
        payload: result
    }
}
export function formSubmitFailure(result) {
    return {
        type: types.FAILURE,
        payload: result
    }
}

export function submitForm(data) {
    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                dispatch(formSubmitSuccess(result));
            } else {
                dispatch(formSubmitFailure(result));
            }
        } catch (e) {
            dispatch(formSubmitFailure(e));
        }
    }
}
