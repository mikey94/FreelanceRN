import createReducer from '../../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoading: false,
    userId: null,
    error: null
}

export const signInReducer = createReducer(initialState,{
    [types.LOGIN_REQUEST](state,action){
        return{
            ...state,
            isLoading: true
        }
    },
    [types.LOGIN_REQUEST_SUCCESS](state,action){
        return{
            ...state,
            isLoading: false,
            userId: action.payload.user_id,
            error: null
        }
    },
    [types.LOGIN_REQUEST_FAILURE](state,action){
        return{
            ...state,
            isLoading: false,
            error: action.payload
        }
    }
})