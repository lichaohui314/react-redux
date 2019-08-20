import { createStore } from "redux"
// 引入 reducer
import homeReducer from "./reducer/home.js"
// 与 reduce 连接起来
export default createStore(homeReducer)