import Api from "../"
import { ApiEndpoint, Method } from "../ApiConstants"

export function scanQr(payload) {
  data = {
    id: `${payload.id}`,
    qr_code: `${payload.qrCode}`
  }
  return Api.api_post(ApiEndpoint.SCAN_QR_CODE, data);
}
