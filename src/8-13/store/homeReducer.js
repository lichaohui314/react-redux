import actionTypes from "./actionType.js";

const defaultState = {
    title: "欢迎光临首页",
    list: [
        { id: 1, text: "9.1开学了" }
    ]
}
// reducers 一定是一个纯函数,纯粹的函数
// 纯函数没有依赖与第三方的任何东西,包括 js 内置的一些全局变量,比如事件 new、 dat、 定时器
export default (state = defaultState, action) => {
    // 深拷贝一份 state, state 在 redux 中定义是只读的,不可以直接修改 
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionTypes.CHANGE_TITLE:
            newState.title = action.value;
            return newState
        default:
            return state
    }


}