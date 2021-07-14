import Api from "../"
import { ApiEndpoint, Method } from "../ApiConstants"


export function signIn(payload){
    const data = {
        email: `${payload.email}`,
        password: `${payload.password}`
    }
    return Api.api_post(ApiEndpoint.SIGN_IN, data)
}