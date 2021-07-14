import { takeEvery, all, take } from 'redux-saga/effects';
import { signInUser } from "./signInSaga"
import { scanQrImage } from "./scanQrSaga"
import { getProfileDetails } from "./profileSaga"
import { getAllDeals, getAllPackages, getDeal, getPackage, getCoupon, redeemADeal } from "./dealsAndPackagesSaga"
import * as types from '../redux/actions/types';

export default function* watch(){
    yield all([
        takeEvery([types.LOGIN_REQUEST], signInUser),
        takeEvery([types.SCAN_QR_CODE_REQUEST], scanQrImage),
        takeEvery([types.GET_PROFILE_DATA_REQUEST], getProfileDetails),
        takeEvery([types.GET_ALL_DEALS_REQUEST], getAllDeals),
        takeEvery([types.GET_ALL_PACKAGES_REQUEST], getAllPackages),
        takeEvery([types.GET_DEAL_REQUEST], getDeal),
        takeEvery([types.GET_PACKAGE_REQUEST], getPackage),
        takeEvery([types.SHOW_COUPON_REQUEST], getCoupon),
        takeEvery([types.REDEEM_DEAL_REQUEST], redeemADeal)
    ]);
}