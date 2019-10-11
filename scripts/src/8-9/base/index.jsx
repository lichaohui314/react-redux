import React, { Component } from 'react'
import Child1 from "./Child"
import Child2 from "./Child2"
import DomPand from "./domPand"
import store from "./store"
export default class Html extends Component {
    constructor() {
        super()
        this.state = {
            value: ""
        }
    }
    render() {
        const { value } = this.state
        return (
            <div>
                <Child1 />
                <Child2 />
                <input type="text"
                    name="value"
                    value={value}
                    onChange={({ target }) => {
                        this.setState({
                            [target.name]: target.value
                        })
                        // 每次输入的时候,就派发一个动作到仓库里
                        store.dispatch({
                            type: "changeHtml",
                            value: target.value
                        })
                    }} />
                <button onClick={this.onSubmit} >提交</button>
                <DomPand />
            </div>
        )
    }
    onSubmit = () => {
        console.log(this.state.value)
        // action 动作,他就是告诉仓库,要干什么
        const action = {
            type: "changeValue",    // 自定义说明
            value: this.state.value
        }
        // dispatch 派发我们的动作到仓库里面去
        store.dispatch(action)
    }
}
