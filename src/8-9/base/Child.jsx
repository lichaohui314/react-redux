import React, { Component } from 'react'
import store from "./store"
export default class Child extends Component {
    constructor() {
        super()
        // 1. 获取仓库里的值
        this.state = store.getState()
        // 2. 订阅,当仓库里发生改变的时候触发
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }
    render() {
        return (
            <div>
                <mark>子组件1</mark>
                <p>{this.state.value}</p>
            </div>
        )
    }
}
