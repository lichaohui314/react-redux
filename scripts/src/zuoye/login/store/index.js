import { createStore, applyMiddleware, combineReducers } from "redux"
import login from "./reducers/login"
import register from "./reducers/register"
import thunk from "redux-thunk"
export default createStore(combineReducers({ login, register }), applyMiddleware(thunk))