import { LOGIN, REGISTER, TOKEN } from "../actionTypes/userType"
import axios from "axios"
const token = TOKEN
const loginAction = (data) => {
    return {
        type: LOGIN,
        data,
        token
    }
}

const registerAction = (data) => {
    return {
        type: REGISTER,
        data,
        token
    }
}
export const onSubmitAction = (data) => {
    const { eventType, username, password } = data
    return (dispatch, getState) => {
        // 假设的接口地址
        let url = eventType === "register" ? "http://192.168.42.73:3003/register" : "http://192.168.42.73:3003/login"
        // 当前没有这两个接口地址,所以都是走catch
        setTimeout(() => {
            if (eventType === "register") {
                // 这里的 data 在真实项目中,应该是接口返回的数据
                dispatch(registerAction(data))
                alert("注册成功")
            } else {
                // 逻辑: 如果是登录,那么需要从 reducer 中取出用户信息做对比,有,就算成功了.没有,就报错
                const reducer = getState().userReducer
                if (username !== reducer.username) {
                    alert("该用户不存在")
                } else if (password !== reducer.password) {
                    alert("您的密码有误")
                } else {
                    dispatch(loginAction(data))
                }
            }
        }, 500);
    }
}