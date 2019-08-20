import { createStore, combineReducers } from "redux"
import homeReducer from "./homeReducer.js"
import prodRecucer from "./productRecucer.js"
// combineReducers是用来合并多个reducer的
const reducers = combineReducers({
    homeReducer,
    prodRecucer
})
const store = createStore(reducers)
export default store