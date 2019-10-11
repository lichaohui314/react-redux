import { createStore, applyMiddleware, compose } from "redux"
import reducer from "./reducer"
import thunk from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const _thunk = composeEnhancers(applyMiddleware(thunk))
export default createStore(reducer, _thunk)