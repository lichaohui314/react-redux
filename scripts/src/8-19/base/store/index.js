import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import reducer from "./reducer"
/*
 * compose: 是一个将多个函数用嵌套的方式依次从右向左去执行,
    使用场景: 当我们需要使用多个中间件的时候,就用它,
    因为 createStore 只能是第二个参数为中间件,为中间件的包裹器: applyMiddleware 
    只有最后一个参数才能拥有真实的 dispatch
 * applyMiddleware: 用来包裹中间件的,他会给我们的中间件传入两个参数,一个是 state,
    一个是 dispatch ,如果不用它去包裹,那么中间件是获取不到这些参数的
 */


// 当需要使用多个中间键的时候
// compose(applyMiddleware(thunk), applyMiddleware(fn1))

// createStore 最多接受三个参数,第一个参永远都是 reducer,第二个或许是合并后的reducer,或者是中间件

// 该写法只是 redux-devtools插件的固有写法,如果是其他的中间件,只需要 compose(f1,f2)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
// 如果仅仅是用一个中间件的话,直接使用 applyMiddleware 即可
export default createStore(reducer, applyMiddleware(thunk))

// 如果使用多个中间件,那么就需要使用 compose
// export default createStore(reducer, compose(applyMiddleware(thunk), applyMiddleware(thunk2), applyMiddleware(thunk3)))