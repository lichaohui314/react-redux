import React, { Component } from 'react'
import store from "./store"
export default class Child extends Component {
    constructor() {
        super()
        this.state = store.getState()
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }
    // 点击减1
    onreducenum = () => {
        const action = {
            type: "res",
            value: this.state.value - 1
        }
        store.dispatch(action)
    }
    render() {
        return (
            <div>
                <p style={{ background: "red", margin: "20px" }}>{this.state.value}.00</p>
                <button style={{ float: "right", width: "100px" }} onClick={this.onreducenum}>点击减1</button>
            </div>
        )
    }
}
