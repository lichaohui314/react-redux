// 1. 引入创建仓库的 createStore 方法
import { createStore } from "redux"

// 2. 引入reducer
import reducers from "./reducers"

// 3. 暴露出去
export default createStore(reducers)