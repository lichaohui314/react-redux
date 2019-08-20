// reducers 是一个纯函数,规则:它的 state 是只读的
// 1. 创建默认值
const defauleValue = {
    value: 100
}
// 2. 创建一个纯函数 -- reducer
const reducer = (state = defauleValue, action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case "add":
            return { value: action.value }
        case "res":
            return { value: action.value }
        default:
            return state
    }
}
// 3. 导出暴露
export default reducer