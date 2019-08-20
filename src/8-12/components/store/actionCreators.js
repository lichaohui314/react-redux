import actionTypes from "./actionTypes.js"

const changeInputAction = (value) => {
    return {
        type: actionTypes.CHANGE_INPUT,
        value
    }
}
const addItemAction = {
    type: actionTypes.ADD_ITEM
}
const removerItem = (index) => {
    return {
        type: actionTypes.DEL_ITEM,
        index
    }
}

// 暴露出去
export {
    // 改变输入框的值
    changeInputAction,
    // 添加一条数据到list
    addItemAction,
    // 删除一条数据从list
    removerItem
}