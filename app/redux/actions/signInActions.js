/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import * as types from "./types";

export function signInUser(email, password) {
  return {
    type: types.LOGIN_REQUEST,
    payload: {
      email,
      password
    }
  };
}
