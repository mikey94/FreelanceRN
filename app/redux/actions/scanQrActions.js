import * as types from "./types"

export function scanQr(id, qrCode){
    return{
        type: types.SCAN_QR_CODE_REQUEST,
        payload:{
            id,
            qrCode
        }
    }
}