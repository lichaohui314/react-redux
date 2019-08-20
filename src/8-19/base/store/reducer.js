import { ON_CHANGE_INPUT, LOADING, PUSH_BAIDU_RES, ERR_API } from "./actionTypes"
const defaultState = {
    input: "",   // input值
    list: [],    // 百度数据存储
    loading: false,// 控制页面加载框是否显示
    err: false  // 是否显示接口报错后的提示
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case LOADING:
            newState.loading = action.statue
            return newState
        case ON_CHANGE_INPUT:
            newState.input = action.value
            return newState
        case PUSH_BAIDU_RES:
            newState.list = action.value
            return newState
        case ERR_API:
            newState.loading = false
            newState.err = action.statue
            return newState
        default:
            return newState
    }
}