import React, { Component } from 'react'
import { Provider } from "react-redux"
import { bindActionCreators } from "redux"
import store from "./store"
import { changeInput } from "./store/actionCreator"
import Son from "./components/son"
export default class Html extends Component {
    constructor() {
        super()
        /*
         * bindActionCreators 接受两个参数:
         * 1. 第一个参数是 actionCreator
         * 2. 第二个参数是 dispatch
         * 3. 作用: 将我们的动作和 dispatch 做了一个封装,返回了一个对象,这样我们再使用返回的 actionCreator, 就不用 dispatch
         * 如果传入的是一个对象,返回一个对象,如果传入的是一个函数,返回一个函数
         */
        this.sonFn = bindActionCreators({
            changeInput
        }, store.dispatch)
    }
    render() {
        return (
            <Provider store={store}>
                首页
                <Son inputvalue={store.getState().inputValue} sonfn={this.sonFn} />
            </Provider>
        )
    }
}
