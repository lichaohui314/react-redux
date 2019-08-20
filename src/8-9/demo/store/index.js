// 1. 引入redux
import { createStore } from "redux"

// 2. 引入 reducers
import reducer from "./reducers"

// 3. 导出方法
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())