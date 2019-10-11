import React from 'react'
import { combineReducers } from "redux"
import store from "../store"
import { changeTitleAction } from "../store/actionCretors"
import homeReducer from "../store/homeReducer.js"
// 使用 replaceReducer 重新定义指定的 reducer 需要再次使用 combineReducers 做一个包裹
store.replaceReducer(combineReducers({ homeReducer }))
export default (props) => {
    const reducer = store.getState()
    const data = reducer.homeReducer
    console.log(reducer)
    // 改变仓库里对应的 title
    const changeTitle = () => {
        const time = new Date().getTime()
        const action = changeTitleAction(data.title + time)
        store.dispatch(action)
    }
    return <div>
        <p>{data.title}</p>
        <ul>
            {
                data.list.map((item, index) => {
                    return <li key={item.id}>{item.text}</li>
                })
            }
        </ul>
        <button onClick={changeTitle}>给title加点东西</button>
    </div>
}