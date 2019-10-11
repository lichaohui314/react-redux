import React, { Component } from 'react'
import store from "./store"
import Child1 from "./Child"
export default class Html extends Component {
    constructor() {
        super()
        this.state = store.getState()
        // 订阅 store 
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }
    render() {
        return (
            <div style={{ margin: "auto", textAlign: "center" }}>
                <p style={{ background: "red", margin: "20px" }}>{this.state.value}元</p>
                <Child1 />
                <button style={{ float: "left", width: "100px" }} onClick={this.onaddnum}>点击加1</button>
            </div>
        )
    }
    // 点击加1
    onaddnum = () => {
        const action = {
            type: "add",
            value: this.state.value + 1
        }
        store.dispatch(action)
    }

}
