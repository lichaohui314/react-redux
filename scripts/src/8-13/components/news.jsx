import React, { Component } from 'react'
import store from "../store"
import { changeInputAction } from "../store/actionCretors.js"

export default class News extends Component {
    constructor() {
        super()
        this.state = store.getState().newsReducer
        store.subscribe(() => {
            this.setState(store.getState().newsReducer)
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <input type="text"
                    value={this.state.queryValue}
                    onChange={({ target }) => {
                        store.dispatch(changeInputAction(target.value))
                    }} />
            </div>
        )
    }
}
