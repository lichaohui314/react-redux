import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import userReducer from "./reducers/userReducer"
import newsReducer from "./reducers/newsReducer"
import homeReducer from "./reducers/homeReducer"
export default createStore(combineReducers({
    userReducer,
    newsReducer,
    homeReducer
}), applyMiddleware(thunk))