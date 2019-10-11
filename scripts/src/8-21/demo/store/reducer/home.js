import { CHANGE_INPUT, TOKEN, ADD_ITEM } from "../actionTypes/home"
const defaultState = {
    input: "",
    list: []
}
export default (state = defaultState, action) => {
    if (action.token !== TOKEN) return state
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        // 修改 input 的值
        case CHANGE_INPUT:
            newState.input = action.value
            return newState
        // 添加数据
        case ADD_ITEM:
            newState.list.push(action.item)
            return newState
        default:
            return newState
    }
}