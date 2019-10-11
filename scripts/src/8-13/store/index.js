import { createStore, combineReducers } from "redux"
import homeReducer from "./homeReducer"
import newsReducer from "./newsReducer"
// combineReducers 就是合并多个 reducer 的
const reducers = combineReducers({
    homeReducer,
    newsReducer
})
// 创建仓库,传入合并后的reducers
const store = createStore(reducers)
export default store