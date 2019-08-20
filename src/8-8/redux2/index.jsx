import React, { Component } from 'react'
import store from "./store"
import Child from "./Child"
export default class Html extends Component {
    constructor() {
        super()
        // 获取仓库里的状态数据
        this.state = store.getState()
        // 订阅我们的state
        // subscribe里面的参数必须是一个函数
        store.subscribe(() => {
            console.log("数据改变")
            this.setState(store.getState())
        })
    }
    // 点击事件
    onaddCount = () => {
        // 派发事件到仓库里面,参数是一个对象,这个对象至少有两个参数
        store.dispatch({
            // 第一个参数,表示本次要进行什么操作
            type: "add",
            // 第二个参数,操作的过程
            value: this.state.num + 1
        })
    }
    render() {
        return (
            <div>
                <p>num:{this.state.num}</p>
                <button onClick={this.onaddCount} >累加</button>
                <Child />
            </div>
        )
    }
}
