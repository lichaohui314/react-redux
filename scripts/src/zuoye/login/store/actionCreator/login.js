import { CHANGE_INPUT, TOKEN, LOGIN_BTN, STATUS_ACTION } from "../actionTypes/login"
import axios from "axios"
const token = TOKEN
export const ChangeInputAction = (...data) => {
    return {
        type: CHANGE_INPUT,
        data,
        token
    }
}
const login = {
    type: LOGIN_BTN,
    token
}
// 登录动画
const statusAction = (status) => ({
    type: STATUS_ACTION,
    status
})
export const loginAction = () => {
    return (dispatch, getState) => {
        dispatch(statusAction(true))
        axios.get("/").then(res => {
            console.log(res)
            dispatch(login)
        })
    }
}