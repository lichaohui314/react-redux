import { CHANGE_INPUT, ENTER_KEY, DEL_ITEM, ADD_ITEM, DELNUM_ITEM } from "./actionTypes"
// 改变 input 的值
const changeInput = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
}
// 回车提交事件
const handleenterkey = (value) => {
    return {
        type: ENTER_KEY,
        value
    }
}
// 删除该条数据
const delItem = (index) => {
    return {
        type: DEL_ITEM,
        index
    }
}
// 删除已完成的条数
const delnumItem = (index) => {
    return {
        type: DELNUM_ITEM,
        index
    }
}
// 完成选项
const changeChecked = (value, index) => {
    return {
        type: ADD_ITEM,
        value,
        index
    }
}
export {
    // 改变 input 的值
    changeInput,
    // 回车提交事件
    handleenterkey,
    // 删除该条数据
    delItem,
    // 删除已完成的条数
    delnumItem,
    // 完成选项
    changeChecked
}