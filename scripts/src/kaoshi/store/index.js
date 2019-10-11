import { createStore, applyMiddleware, combineReducers } from "redux"
import homeReducer from "./reducers/homeReducer"
import thunk from "redux-thunk"
export default createStore(combineReducers({ homeReducer }), applyMiddleware(thunk))