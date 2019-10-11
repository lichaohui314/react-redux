import React, { Component } from 'react'
import store from "../store"
import { changeInput, addItemAction, removerItem, delItemAction } from "../store/actionCretors"
export default class Home extends Component {
    constructor() {
        super()
        this.state = store.getState().homeReducer
        store.subscribe(() => {
            this.setState(store.getState().homeReducer)
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <div>
                    <input type="text"
                        placeholder="输入内容"
                        value={this.state.inputValue}
                        onChange={({ target }) => {
                            console.log(target)
                            store.dispatch(changeInput(target.value))
                        }} />
                    <button onClick={() => {
                        store.dispatch(addItemAction)
                    }}>提交</button>
                    <button onClick={() => {
                        store.dispatch(delItemAction)
                    }}>清空</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>
                                {item}
                                <button onClick={() => {
                                    store.dispatch(removerItem(index))
                                }}>删除</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
