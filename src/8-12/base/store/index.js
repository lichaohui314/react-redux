// 引入 reducers
import reducers from './reducers.js'
import { createStore } from 'redux'
// 将 reducer 传给 createStore 创建一个 store 实例,并暴露出去
export default createStore(reducers)