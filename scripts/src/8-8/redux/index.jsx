import React, { Component } from "react"
// 1. 引入我们的仓库
import store from "./store"
import Child from "./child"
export default class Html extends Component {
    constructor(props) {
        super(props)
        // 2. 获取仓库里的状态数据
        this.state = store.getState()
        // 2.1 订阅一下我们的 store
        // subscribe 里的参数必须是一个函数
        store.subscribe(() => {
            console.log("数据改变了")
            // 2.2当订阅触发后,重新获取仓库里的状态数据
            this.setState(store.getState())
        })
    }

    // 3. 修改仓库里的状态
    onaddCount = () => {
        /*3.1 派发一个动作到仓库里,参数是一个对象,这是官方规定的,这个对象里至少有两个参数,
        一个是类型: 表示本次操作的是什么,
        第二参是传进去的值*/
        store.dispatch({
            type: 'add',
            value: this.state.count + 1
        })

    }
    render() {
        return (
            <div>
                <p>当前页:{this.state.count}</p>
                <div>子组件:<Child /></div>
                <button onClick={this.onaddCount}>父组件-累计</button>
            </div>
        )
    }
}