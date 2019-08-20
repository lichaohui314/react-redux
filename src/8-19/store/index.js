import { createStore, applyMiddleware, compose } from "redux"
import reducer from "./reducers"
import thunk from "redux-thunk"
const _thunk = applyMiddleware(thunk)
// 就如当前例子,只用一个中间件,那么 compose 就没用了,如果有多个中间件,就需要用 compose
export default createStore(reducer, _thunk)