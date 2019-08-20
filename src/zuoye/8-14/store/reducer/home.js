import { CHANGE_INPUT, SEARCH_LIST, ADD_HISTORY, DEL_HISTORY, CLEAR_HISTORY } from "../actionTypes/home"
const defaultState = {
    inputValue: "",
    searchList: [],
    historyList: []
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        // 改变input的值
        case CHANGE_INPUT:
            newState.inputValue = action.value
            return newState
        // 搜索列表
        case SEARCH_LIST:
            newState.searchList = action.list
            newState.inputValue = ''
            return newState
        // 添加历史记录
        case ADD_HISTORY:
            const item = newState.searchList.find((item, index) => {
                if (index === action.index) {
                    return item
                }
            })
            newState.historyList.push(item)
            return newState
        // 删除该条记录
        case DEL_HISTORY:
            newState.historyList.splice(action.index, 1)
            return newState
        // 清空历史记录
        case CLEAR_HISTORY:
            newState.historyList = []
            return newState
        default:
            return state
    }
}