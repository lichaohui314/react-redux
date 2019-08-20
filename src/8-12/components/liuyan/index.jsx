import React, { Component } from 'react'
import store from "../store"
export default class Liuyan extends Component {
    constructor() {
        super()
        this.state = store.getState()
    }
    render() {
        return (
            <div>
                {
                    this.state.list.map((item, index) => {
                        return <p key={index}>{item}</p>
                    })
                }
            </div>
        )
    }
}
