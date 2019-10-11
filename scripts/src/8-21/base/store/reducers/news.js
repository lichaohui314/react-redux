import { CHANGE_INPUT, TOKEN, ADD_ITEM } from "../actionTypes/news"
const defaultState = {
    input: "",
    list: []
}
export default (state = defaultState, action) => {
    if (action.token !== TOKEN) return state   // 楔子,自定义优化,用令牌的方式去做判断
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        // 改变 input 的值
        case CHANGE_INPUT:
            newState.input = action.value
            return newState
        // 添加数据
        case ADD_ITEM:
            newState.list.push(action.value)
            return newState
        default:
            return newState
    }
}