import { types } from "../types/types"

const initialState = {
    formSumbitStatus: null
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.SUCCESS:
            return {
                ...state,
                formSumbitStatus: 'success'
            }
        case types.FAILURE:
            return {
                ...state,
                formSumbitStatus: 'failure'
            }
        case types.RESET_FORM:
            return {
                ...state,
                formSumbitStatus: null
            }
        default:
            return state
    }
}