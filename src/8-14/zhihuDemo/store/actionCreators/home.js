import { CHANGE_INPUT, SERACH_LIST, HISTORY_LiST, DEL_HISTORY } from "../actionTypes/home"

// 改变input的值
const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
// 改变搜索内容
const onSearchAction = (list) => ({
    type: SERACH_LIST,
    list
})
// 改变搜索记录
const onHistoryAction = (index) => ({
    type: HISTORY_LiST,
    index
})
// 删除当前这条记录
const onDelHistory = (index) => ({
    type: DEL_HISTORY,
    index
})
export {
    // 改变input的值
    changeInputAction,
    // 改变搜索内容
    onSearchAction,
    // 改变搜索记录
    onHistoryAction,
    // 删除记录
    onDelHistory
}