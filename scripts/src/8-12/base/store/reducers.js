import actionTypes from "./actionTypes.js"
// 1. 默认的值
const defaultState = {
    count: 0,
    list: [1, 2, 3]
}
// 2 state 是状态数据,默认会给一个默认的值,action 是组件 dispatch 过来的
export default (state = defaultState, action) => {
    // 深拷贝 state 可以使用 loadsh 的 deepclone(),一般使用JSON的就可以了
    const newState = JSON.parse(JSON.stringify(state))
    console.log(action)
    switch (action.type) {
        case actionTypes.ADD_COUNT:
            // 规则: state 是只读的,不可以直接修改
            // 返回的值一定要和默认值做合并,不然会出问题---bug
            newState.count = state.count + 1
            return newState
        case actionTypes.ADD_ITEM:
            newState.list.push(action.value)
            return newState
        default:
            return state;
    }
}