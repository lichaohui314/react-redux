import React, { Component } from 'react'
import store from "./store.js"
export default class Child extends Component {
    constructor() {
        super()
        // 获取仓库数据
        this.state = store.getState()
        // 订阅 state (也就是双向数据绑定)
        store.subscribe(() => {
            console.log("123")
            this.setState(store.getState())
        })
    }
    remouer = () => {
        // 提交事件到仓库,只接受一个对象,对象最少两个参数
        store.dispatch({
            type: 'res',
            value: this.state.num - 1
        })
    }
    render() {
        return (
            <div>
                <p>子组件:{this.state.num}</p>
                <button onClick={this.remouer} >递减</button>
            </div>
        )
    }
}
