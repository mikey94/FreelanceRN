import { put, call, select, take } from "redux-saga/effects";
import * as types from "../redux/actions/types";
import navigationService from "../navigation/NavigationService";
import { getDeals, getPackages, getSingleDeal, getSinglePackage, redeemDeal, showCoupon } from "../api/methods/dealsAndPackages"
import { Alert } from "react-native";
export function* getAllDeals(action) {
    var response = {}
    try{
        response = yield call(getDeals, action.payload)
        if( response.response_code === 200 ) {
            yield put({ type: types.GET_ALL_DEALS_REQUEST_SUCCESS, payload: response })
        }
        else {
            yield put({ type: types.GET_ALL_DEALS_REQUEST_FAILURE, payload: response.error })
        }
    }
    catch(error){
        yield put({ type: types.GET_ALL_DEALS_REQUEST_FAILURE, payload: error })
    }
}

export function* getDeal(action) {
    var response = {}
    console.log("getDeal running")
    try {
        response = yield call(getSingleDeal, action.payload)
        if( response.response_code === 200 ) {
            yield put({ type: types.GET_DEAL_REQUEST_SUCCESS, payload: response })
            // this.props.navigation.navigate('DealInfo')
            navigationService.navigate('DealInfo')
        }
        else {
            yield put({ type: types.GET_DEAL_REQUEST_FAILURE, payload: response.error })
        }
    }
    catch(error) {
        yield put({ type: types.GET_DEAL_REQUEST_FAILURE, payload: error })
    }
}

export function* getAllPackages(action) {
    var response = {}
    try {
        response = yield call(getPackages, action.payload)
        if( response.response_code === 200 ) {
            yield put({ type: types.GET_ALL_PACKAGES_REQUEST_SUCCESS, payload: response })
        }
        else {
            yield put({ type: types.GET_ALL_PACKAGES_REQUEST_FAILURE, payload: response.error })
        }
    }
    catch(error) {
        yield put({ type: types.GET_ALL_PACKAGES_REQUEST_FAILURE, payload: error })
    }
}

export function* getPackage(action) {
    var response = {}
    try {
        response = yield call(getSinglePackage, action.payload)
        if( response.response_code === 200 ) {
            yield put({ type: types.GET_PACKAGE_REQUEST_SUCCESS, payload: response })
        }
        else {
            yield put({ type: types.GET_PACKAGE_REQUEST_FAILURE, payload: response.error })
        }
    }
    catch(error) {
        yield put({ type: types.GET_PACKAGE_REQUEST_FAILURE, payload: error })
    }
}

export function* redeemADeal(action){
    var response = {}
    try {
        response = yield call(redeemDeal, action.payload)
        if( response.response_code === 200 ) {
            yield put({ type: types.REDEEM_DEAL_REQUEST_SUCCESS, payload: response })
            Alert.alert("Redeem Successful")
        }
        else {
            yield put({ type: types.REDEEM_DEAL_REQUEST_FAILURE, payload: response.error })
            Alert.alert("Redeem Fail")
        }
    }
    catch(error) {
        yield put({ type: types.REDEEM_DEAL_REQUEST_FAILURE, payload: error })
    }
}

export function* getCoupon(action){
    var response = {}
    try {
        response = yield call(showCoupon, action.payload)
        if( response.response_code === 200 ) {
            yield put({ type: types.SHOW_COUPON_REQUEST_SUCCESS, payload: response })
        }
        else {
            yield put({ type: types.SHOW_COUPON_REQUEST_FAILURE, payload: response.error })
        }
    }
    catch(error) {
        yield put({ type: types.SHOW_COUPON_REQUEST_FAILURE, payload: error })
    }
}