import React, { Component } from 'react'
import Home from "./home.jsx"
import store from "./store"
import { Provider } from "react-redux"
export default class Html extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home name="我是首页" />
            </Provider>
        )
    }
}
