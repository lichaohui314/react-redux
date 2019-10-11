import { createStore, applyMiddleware, combineReducers } from "redux"
import home from "./reducer/home"
import news from "./reducer/news"
import thunk from "redux-thunk"

export default createStore(
    combineReducers({
        home,
        news
    }),
    applyMiddleware(thunk)
)