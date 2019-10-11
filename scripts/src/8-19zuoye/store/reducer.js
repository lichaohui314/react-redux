import { CHANGE_INPUT, LOADING, RE_SET } from "./actionTypes"
const defaultState = {
    username: "",
    password: "",
    repassword: "",
    loading: false
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        // 改变 loading 值
        case LOADING:
            newState.loading = action.status
            return newState
        // 改变 input 值的
        case CHANGE_INPUT:
            newState[action.data[0]] = action.data[1]
            return newState
        // 重置表单
        case RE_SET:
            return defaultState
        default:
            return newState
    }
}