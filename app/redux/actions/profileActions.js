import * as types from "./types"


export function getProfileDetails(id){
    return{
        type: types.GET_PROFILE_DATA_REQUEST,
        payload:{
            id
        }
    }
}