import React, { Component } from 'react'
// 引入子组件
import Header from "./header.jsx"
import List from "./list.jsx"
// 引入仓库
import store from "../store"
// 引入动作创建者
import { changeInputAction, addItemAction, removerItem } from "../store/actionCreators"
export default class Html extends Component {
    constructor() {
        super()
        // 1. 获取默认值
        this.state = store.getState()
        // 2. 订阅函数--监听 store 函数
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState())
        })
    }
    componentWillUnmount() {
        // 取消订阅
        console.log('取消订阅')
        this.unsubscribe()
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Header value={this.state.inputValue}
                    additem={() => {
                        store.dispatch(addItemAction)
                    }}
                    changeinput={({ target }) => {
                        store.dispatch(changeInputAction(target.value))
                    }} />
                <List removerItem={(index) => store.dispatch(removerItem(index))} list={this.state.list} />
            </div>
        )
    }
}
