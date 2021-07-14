import createReducer from '../../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoading: false,
    isDealsFetched: false,
    data: [],
    selectedDealData: []
}

export const dealsAndPackagesReducer = createReducer(initialState, {
    [types.GET_ALL_DEALS_REQUEST](state,action){
        return {
            ...state,
            isDealsFetched: false
        }
    },
    [types.GET_ALL_DEALS_REQUEST_SUCCESS](state,action){
        return {
            ...state,
            isDealsFetched: true,
            data: action.payload
        }
    },
    [types.GET_ALL_DEALS_REQUEST_FAILURE](state,action){
        return {
            ...state,
            isDealsFetched: false
        }
    },
    [types.GET_DEAL_REQUEST](state,action){
        return {
            ...state,
            isLoading: true
        }
    },
    [types.GET_DEAL_REQUEST_SUCCESS](state,action){
        return {
            ...state,
            isLoading: false,
            selectedDealData: action.payload
        }
    },
    [types.GET_DEAL_REQUEST_FAILURE](state,action){
        return {
            ...state,
            isLoading: false
        }
    },
    [types.GET_ALL_PACKAGES_REQUEST](state,action){
        return {
            ...state,
            isLoading: true
        }
    },
    [types.GET_ALL_PACKAGES_REQUEST_SUCCESS](state,action){
        return {
            ...state,
            isLoading: false
        }
    },
    [types.GET_ALL_PACKAGES_REQUEST_FAILURE](state,action){
        return {
            ...state,
            isLoading: false
        }
    },
    [types.GET_PACKAGE_REQUEST](state,action){
        return {
            ...state,
            isLoading: true
        }
    },
    [types.GET_PACKAGE_REQUEST_SUCCESS](state,action){
        return {
            ...state,
            isLoading: false
        }
    },
    [types.GET_PACKAGE_REQUEST_FAILURE](state,action){
        return {
            ...state,
            isLoading: false
        }
    },
    [types.REDEEM_DEAL_REQUEST](state,action){
        return {
            ...state,
            isLoading: true
        }
    },
    [types.REDEEM_DEAL_REQUEST_SUCCESS](state,action){
        return {
            ...state,
            isLoading: false
        }
    },
    [types.REDEEM_DEAL_REQUEST_FAILURE](state,action){
        return {
            ...state,
            isLoading: false
        }
    },
    [types.SHOW_COUPON_REQUEST](state,action){
        return {
            ...state,
            isLoading: true
        }
    },
    [types.SHOW_COUPON_REQUEST_SUCCESS](state,action){
        return {
            ...state,
            isLoading: false
        }
    },
    [types.SHOW_COUPON_REQUEST_FAILURE](state,action){
        return {
            ...state,
            isLoading: false
        }
    }
})