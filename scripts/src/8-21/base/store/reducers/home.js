import { CHANGE_INPUT, TOKEN, ADD_ITEM } from "../actionTypes/home"
const defaultState = {
    input: "",
    list: [{ id: 1, label: "默认值" }]
}
export default (state = defaultState, action) => {
    if (action.token !== TOKEN) return state
    console.log("这是首页的reducers")
    const newState = JSON.parse(JSON.stringify(state))
    // 改变 input 的值
    switch (action.type) {
        // 改变 input 的值
        case CHANGE_INPUT:
            newState.input = action.value
            return newState
        // 添加一条数据到 list
        case ADD_ITEM:
            newState.list.push(action.item)
            return newState
        default:
            return newState
    }
}