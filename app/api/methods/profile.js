import Api from "../";
import { ApiEndpoint, Method } from "../ApiConstants";

export function getProfileData(payload) {
  url = ApiEndpoint.GET_PROFILE + payload.id
  return Api.api_get(url);
}
