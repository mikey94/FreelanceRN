// General api to access data
import axios from 'axios';
import { ApiEndpoint } from './ApiConstants';

function api_post(Path, data) {

    var url = new URL(`${Path}`,`${ApiEndpoint.BASE_URL}`)

    console.log("Api url ", url)
    console.log("path", Path)
    console.log("Api data", data)
    
    return fetch( url ,{
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
            "Accept"      : "application/json"
        },
        body: JSON.stringify(data)
    }).then((res)=> res.json())
    .catch((err)=> err)

}

function api_get(Path){
    var url = new URL(`${Path}`,`${ApiEndpoint.BASE_URL}`)
    return fetch( url ,{
        method: 'GET',
        headers:{
            "Content-Type": "application/json",
            "Accept"      : "application/json"
        },
    }).then((res)=> res.json())
    .catch((err)=> err)
}

export default {
    api_get,
    api_post
}