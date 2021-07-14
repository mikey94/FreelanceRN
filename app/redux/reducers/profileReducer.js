import createReducer from '../../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoading: false,
    merchant: {},
    merchantEmp: {},
    user: {},
    error: null
}

export const profileReducer = createReducer(initialState, {
    [types.GET_PROFILE_DATA_REQUEST](state, action) {
        return {
            ...state,
            isLoading: true
        }
    },
    [types.GET_PROFILE_DATA_REQUEST_SUCCESS](state, action) {
        return {
            ...state,
            isLoading: false,
            merchant: action.payload.merchant,
            merchantEmp: action.payload.merchant_employee,
            user: action.payload.user,
            error: null
        }
    },
    [types.GET_PROFILE_DATA_REQUEST_FAILURE](state, action) {
        return {
            ...state,
            isLoading: false,
            error: action.payload
        }
    }
})