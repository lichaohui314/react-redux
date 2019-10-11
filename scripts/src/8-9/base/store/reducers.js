// 1. 默认值
const defaultState = {
    value: '来自 store 的一句话',
    html: ''
}

// 2. 创建一个纯函数--他就是 reducers
const reducer = (state = defaultState, action) => {
    // 2.1 action 动作对象,就是组件里使用 dispatch 方法传过来的
    console.log(action)
    // 2.2 返回一个默认值
    switch (action.type) {
        case "changeValue":
            // 2.3 尽管可以修改 state 值,但是这样会有副作用,而且官方不提倡直接修改,因为 state 在官方定义里是只读的
            // 所以,返回一个新的值,是开发规范, creatState 方法底层,给我们将新旧值做了处理
            return { value: action.value };
        case "changeHtml":
            // 我们的 state 是只读的,所以深拷贝一个去修改
            const newState = JSON.parse(JSON.stringify(state))
            newState.html = action.value
            return newState
        default:
            return state
    }
}
// 3.暴露出去
export default reducer