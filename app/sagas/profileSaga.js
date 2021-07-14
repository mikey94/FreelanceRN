import { put, call, select, take } from "redux-saga/effects";
import * as types from "../redux/actions/types";
import NavigationServices from "../navigation/NavigationService";
import { getProfileData } from "../api/methods/profile";

export function* getProfileDetails(action) {
  var response = {};
  try {
      response = yield call(getProfileData, action.payload)
      if (response.response_code === 200) {
          yield put({ type: types.GET_PROFILE_DATA_REQUEST_SUCCESS, payload: response })
      } else {
          yield put({ type: types.GET_PROFILE_DATA_REQUEST_FAILURE, payload: response.error })
      }
  } catch(error) {
      yield put({ type: types.GET_PROFILE_DATA_REQUEST_FAILURE, payload: error })
  }
}
