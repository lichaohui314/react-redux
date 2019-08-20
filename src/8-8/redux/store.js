// 1.引入我们的 redux 
import { createStore } from "redux"

// 2. 创建仓库 && 传入一个 reducers
// state 是默认值,是只读的,不可以直接修改
// action 是我们 dispatch 过来的数据
const defaultState = { count: 0 }
const store = createStore((state = defaultState, action) => {
    switch (action.type) {
        case "add":
            // state 不能直接修改,所以使用该方法进行合并
            return { count: action.value }
        case "reduce":
            // 如果组件不传进来值,我们需要自己去处理逻辑
            return { count: state.count - 1 }
        default:
            return state
    }

},// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()命令,是开启浏览器里的 redux 插件 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store)

export default store