import actionType from "./actionType.js"
const changeInput = (value) => {
    return {
        type: actionType.CHANGE_INPUT,
        value
    }
}
const addItemAction = {
    type: actionType.CHANGE_ADD
}
const delItemAction = {
    type: actionType.CHANGE_DEL
}
const removerItem = (index) => {
    return {
        type: actionType.DEL_ITEM,
        index
    }
}

const queryInput = (value) => {
    return {
        type: actionType.QUERY_INPUT,
        value
    }
}
// 过滤查找的动作
const queryAction = (query) => {
    return {
        type: actionType.QUERY_LIST,
        query
    }
}
export {
    changeInput,
    addItemAction,
    delItemAction,
    removerItem,
    queryInput,
    queryAction
}