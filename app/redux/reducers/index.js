
import * as signInReducer from "./signInReducer";
import * as profileReducer  from "./profileReducer";
import * as scanQrReducer from "./scanQrReducer";
import * as dealsAndPackagesReducer from "./dealsAndPackagesReducer";

export default Object.assign(signInReducer,profileReducer,scanQrReducer,dealsAndPackagesReducer)