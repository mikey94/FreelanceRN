/* eslint-disable quotes */
import { put, call, select, take } from "redux-saga/effects";
import * as types from "../redux/actions/types";
import NavigationServices from "../navigation/NavigationService";
import { NavigationActions } from "react-navigation";
import { signIn } from "../api/methods/signIn";

export function* signInUser(action) {
  var response = {};
  try {
    response = yield call(signIn, action.payload);
    console.log("response", response, "payload", action.payload)
    if (response.response_code === 200) {
      yield put({ type: types.LOGIN_REQUEST_SUCCESS, payload: response });
      NavigationServices.navigateWithRest('MainTab')
    } else {
      yield put({ type: types.LOGIN_REQUEST_FAILURE, payload: response.error });
    }
  } catch (error) {
    console.log("error", error)
    yield put({ type: types.LOGIN_REQUEST_FAILURE, payload: error });
  }
}
