import createReducer from '../../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoading: false,
    error: null,
    data: null
}

export const scanQrReducer = createReducer(initialState,{
    [types.SCAN_QR_CODE_REQUEST](state,action){
        return{
            ...state,
            isLoading: true,
            error: null
        }
    },
    [types.SCAN_QR_CODE_REQUEST_SUCCESS](state,action){
        return{
            ...state,
            isLoading: false,
            error: null,
            data: action.payload
        }
    },
    [types.SCAN_QR_CODE_REQUEST_FAILURE](state,action){
        return{
            ...state,
            isLoading: false,
            error: action.payload
        }
    }
})