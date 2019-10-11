import { CHANGE_INPUT, ENTER_KEY, DEL_ITEM, ADD_ITEM, DELNUM_ITEM } from "./actionTypes"
const defaultState = {
    inputValue: "",
    // 全部条目
    Underway: [],
    // 已完成条目
    num: []
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        // 改变 input 的值
        case CHANGE_INPUT:
            newState.inputValue = action.value
            return newState
        // 回车提交事件
        case ENTER_KEY:
            const UnderwayObj = { text: action.value, status: false }
            newState.Underway.push(UnderwayObj)
            newState.inputValue = ""
            return newState
        // 删除该条数据
        case DEL_ITEM:
            newState.Underway.splice(action.index, 1)
            return newState
        // 删除已完成的条数
        case DELNUM_ITEM:
            newState.num.splice(action.index, 1)
            newState.Underway.splice(action.index, 1)
            return newState
        // 完成该项
        case ADD_ITEM:
            newState.Underway.find((item, index) => {
                if (index === action.index) {
                    item.status = !item.status
                    return item
                }
            })
            newState.num = newState.Underway.filter(item => {
                if (item.status === true) {
                    return item
                }
            })
            return newState
        default:
            return state
    }
}