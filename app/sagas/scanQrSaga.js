/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { put, call, select, take } from "redux-saga/effects";
import * as types from "../redux/actions/types";
import NavigationServices from "../navigation/NavigationService";
import { scanQr } from "../api/methods/scanQr";

export function* scanQrImage(action) {
  var response = {};
  try {
    response = yield call(scanQr, action.payload);
    console.log("response", response);
    if (response.response_code === 200) {
      yield put({ type: types.SCAN_QR_CODE_REQUEST_SUCCESS, payload: response });
      NavigationServices.navigate('Redeem')
    } else {
      yield put({ type: types.SCAN_QR_CODE_REQUEST_FAILURE, payload: response.error });
    }
  } catch (error) {
    yield put({ type: types.SCAN_QR_CODE_REQUEST_FAILURE, payload: error });
  }
}
