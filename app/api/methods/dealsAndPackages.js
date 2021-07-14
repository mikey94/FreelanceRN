import Api from "../";
import { ApiEndpoint, Method } from "../ApiConstants";

export function getDeals(payload){
    data = {
        id: `${payload.id}`
    }
    return Api.api_post(ApiEndpoint.SHOW_DEALS, data)
}

export function getSingleDeal(payload){
    url = ApiEndpoint.SINGLE_DEAL + payload.id
    return Api.api_get(url)
}

export function getPackages(payload){
    data = {
        id: `${payload.id}`,
        deal_id: `${payload.dealId}`
    }
    return Api.api_post(ApiEndpoint.SHOW_PACKAGES, data)
}

export function getSinglePackage(payload){
    url = ApiEndpoint.SHOW_PACKAGE + payload.id
    return Api.api_get(url)
}

export function redeemDeal(payload){
    data = {
        id: `${payload.id}`,
        coupon_id: `${payload.couponId}`
    }
    return Api.api_post(ApiEndpoint.REDEEM_DEAL, data)
}

export function showCoupon(payload){
    url = ApiEndpoint.SHOW_COUPON + payload.id
    return Api.api_get(url,Method.GET)
}