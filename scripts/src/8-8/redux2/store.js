// 1.引入redux
import { createStore } from "redux"
// 创建仓库,传入一个 reducers
// state 是默认值,是只读的
// action 是我们 dispatch 传过来的数据
const store = createStore((state = { num: 0 }, action) => {
    console.log(action.value);
    switch (action.type) {
        case "add":
            return { num: action.value }
        case "res":
            return { num: action.value }
        default:
            return state
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store