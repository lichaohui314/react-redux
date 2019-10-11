import { CHANGE_INPUT, SEARCH_LIST, ADD_HISTORY, DEL_HISTORY, CLEAR_HISTORY } from "../actionTypes/home"
// 修改input的值
const changeInput = (value) => ({
    type: CHANGE_INPUT,
    value
})
// 搜索列表
const searchList = (list) => ({
    type: SEARCH_LIST,
    list
})
// 添加历史记录
const addHistory = (index) => ({
    type: ADD_HISTORY,
    index
})
// 删除该记录
const delHistory = (index) => ({
    type: DEL_HISTORY,
    index
})
// 清空历史记录
const clearHistory = {
    type: CLEAR_HISTORY
}
export {
    // 修改input的值
    changeInput,
    // 搜索列表
    searchList,
    // 添加历史记录
    addHistory,
    // 删除该条记录
    delHistory,
    // 清空历史记录
    clearHistory
}