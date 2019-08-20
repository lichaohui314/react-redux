import React, { Component } from 'react'
import "./style.scss"
import Header from "./components/Header"
import Main from "./components/Main"
import { bindActionCreators } from "redux"
import { changeInput, handleenterkey, delItem, delnumItem, changeChecked } from "./store/actionCreators"
import store from "./store"
export default class Html extends Component {
    constructor() {
        super()
        this.state = store.getState()
        store.subscribe(() => {
            this.setState(store.getState())
        })
        this.sonFn = bindActionCreators({
            changeInput,
            handleenterkey,
            delItem,
            delnumItem,
            changeChecked
        }, store.dispatch)
    }
    // 回车提交事件
    onhandleEnterKey = (e) => {
        if (e.nativeEvent.keyCode === 13) {
            if (e.target.value !== "") {
                this.sonFn.handleenterkey(e.target.value)
            }
        }
    }
    render() {
        const { inputValue, Underway, Completed, num } = this.state
        const { changeInput, delItem, changeChecked } = this.sonFn
        return (
            <React.Fragment>
                <Header
                    inputvalue={inputValue}
                    onhandleEnterKey={this.onhandleEnterKey}
                    changeinput={changeInput} />
                <Main underway={Underway}
                    delItem={delItem}
                    completed={Completed}
                    num={num}
                    delnumItem={delnumItem}
                    changeChecked={changeChecked} />
            </React.Fragment>
        )
    }
}
