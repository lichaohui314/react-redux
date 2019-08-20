import React, { Component } from 'react'
import store from "./store"
import Child2 from "./Child2"
export default class Child extends Component {
    constructor() {
        super()
        this.state = store.getState()
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }
    render() {
        return (
            <div>
                <p style={{ background: "red", margin: "20px" }}>￥{this.state.value}</p>
                <Child2 />
            </div>
        )
    }
}
