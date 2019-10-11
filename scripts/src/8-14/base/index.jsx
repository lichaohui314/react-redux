import React, { Component } from 'react'
import { Provider } from "react-redux"
import store from "./store"
import Home from "./home"
export default class Html extends Component {
    render() {
        /*
         * 1.react-redux:
            Provider 组件只有一个参数: store,接受的是 redux 创建的store
            作用: 内置了订阅方法--> subscribe
            用于: 根容器
         */
        return (
            <Provider store={store}>
                <Home name="我是首页" />
            </Provider>
        )
    }
}