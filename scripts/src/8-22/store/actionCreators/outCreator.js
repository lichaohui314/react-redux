import { OUT_LOGIN } from "../actionTypes/outTyps"
import { TOKEN } from "../actionTypes/userType"
export const outloginAction = () => {
    return {
        type: OUT_LOGIN,
        token: TOKEN
    }
}