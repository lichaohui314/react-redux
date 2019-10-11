import { CHANGE_INPUT, TOKEN, LOGIN_BTN, STATUS_ACTION } from "../actionTypes/login"
const defaultState = {
    user: "",
    password: "",
    status: false
}
export default (state = defaultState, action) => {
    if (action.token !== TOKEN) return state
    const newState = JSON.parse(JSON.stringify(state))
    console.log(action.data)
    switch (action.type) {
        // 登录动画
        case STATUS_ACTION:
            newState.status = action.status
            return newState
        // 提交按钮
        case LOGIN_BTN:
            return newState
        // 修改 input 的值
        case CHANGE_INPUT:
            newState[action.data[0]] = action.data[1]
            return newState
        default:
            return newState
    }
}