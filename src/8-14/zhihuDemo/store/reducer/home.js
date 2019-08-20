import { CHANGE_INPUT, SERACH_LIST, HISTORY_LiST, DEL_HISTORY } from "../actionTypes/home"
const defaultState = {
    inputValue: "",
    serachList: [],
    historyList: []
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        // 删除记录
        case DEL_HISTORY:
            newState.historyList.splice(action.index, 1)
            return newState
        // 添加历史记录
        case HISTORY_LiST:
            // 通过传过来的 index 在搜索列表里找到它,然后把找到的数据 push 到我们的历史列表里
            const item = newState.serachList.find((item, index) => {
                if (index === action.index) {
                    return item
                }
            })
            newState.historyList.push(item)
            return newState
        // 搜索列表
        case SERACH_LIST:
            newState.serachList = action.list
            return newState
        // 改变input的值
        case CHANGE_INPUT:
            newState.inputValue = action.value;
            return newState
        default:
            return state
    }
}