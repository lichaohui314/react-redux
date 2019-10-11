import { CHANGE_INPUT, TOKEN, ADD_ITEM } from "../actionTypes/homeType"
// 当用户登录和注册成功后,将用户信息和状态值存在这里,共享给其他页面
const defaultState = {
    input: "",
    list: [
        {
            id: 1,
            label: "梳理两个月的知识点"
        }
    ]
}

export default (state = defaultState, action) => {
    if (action.token !== TOKEN) return state
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        // 改变 input 的值
        case CHANGE_INPUT:
            newState.input = action.value
            return newState
        // 添加数据
        case ADD_ITEM:
            let item = ""
            if (newState.list.length === 0) {
                item = { id: 1, label: newState.input }
            } else {
                item = { id: newState.list[newState.list.length - 1].id + 1, label: newState.input }
            }
            newState.list.push(item)
            return newState
        default:
            return newState
    }
}