import { LOGIN, REGISTER, TOKEN } from "../actionTypes/userType"
import { OUT_LOGIN } from "../actionTypes/outTyps"
// 当用户登录和注册成功后,将用户信息和状态值存在这里,共享给其他页面
const defaultState = {
    username: "",
    password: "",
    status: false
}

export default (state = defaultState, action) => {
    if (action.token !== TOKEN) return state
    const newState = JSON.parse(JSON.stringify(state))
    // 数据本地持久化
    switch (action.type) {
        // 注册
        case REGISTER:
            newState.username = action.data.username
            newState.password = action.data.password
            sessionStorage.setItem("newState", JSON.stringify(newState))
            return newState
        // 登录
        case LOGIN:
            newState.status = true
            sessionStorage.setItem("newState", JSON.stringify(newState))
            return newState
        //退出登录
        case OUT_LOGIN:
            // 本地数据持久化
            sessionStorage.setItem("newState", JSON.stringify(defaultState))
            return defaultState
        default:
            return JSON.parse(sessionStorage.getItem("newState")) || state
    }
}