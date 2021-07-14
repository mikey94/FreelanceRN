import * as types from "./types"

export function getAllDeals(id){
    return {
        type: types.GET_ALL_DEALS_REQUEST,
        payload: {
            id
        }
    }
}

export function getSingleDeal(id){
    return {
        type: types.GET_DEAL_REQUEST,
        payload: {
            id
        }
    }
}

export function getPackages(id, dealId){
    return {
        type: types.GET_ALL_PACKAGES_REQUEST,
        payload: {
            id,
            dealId
        }
    }
}

export function getSinglePackage(id){
    return {
        type: types.GET_PACKAGE_REQUEST,
        payload: {
            id
        }
    }
}

export function redeemDeal(id,couponId){
    return {
        type: types.REDEEM_DEAL_REQUEST,
        payload: {
            id,
            couponId
        }
    }
}

export function showCoupon(id){
    return {
        type: types.SHOW_COUPON_REQUEST,
        payload: {
            id
        }
    }
}

export function getSinglePayment(id){
    return {
        type: types.GET_PAYMENT_REQUEST,
        payload: {
            id
        }
    }
}