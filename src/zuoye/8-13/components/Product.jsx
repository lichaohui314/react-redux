import React, { Component } from 'react'
import store from "../store"
import { queryInput, queryAction } from "../store/actionCretors.js"
export default class Product extends Component {
    constructor() {
        super()
        this.state = store.getState().prodRecucer
        store.subscribe(() => {
            this.setState(store.getState().prodRecucer)
        })
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text"
                        placeholder="查询内容"
                        value={this.state.queryValue}
                        onChange={({ target }) => {
                            store.dispatch(queryInput(target.value))
                        }} />
                    <button onClick={() => store.dispatch(queryAction(this.state.queryValue))}>查询</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item) => {
                            return <li key={item.id}>{item.text}</li>
                        })
                    }
                </ul>
            </div >
        )
    }
}
