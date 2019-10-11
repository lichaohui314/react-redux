import { createStore, combineReducers, applyMiddleware } from "redux"
import home from "./reducers/home"
import news from "./reducers/news"
import thunk from "redux-thunk"

export default createStore(
    combineReducers({
        home,
        news
    }),
    applyMiddleware(thunk)
);
