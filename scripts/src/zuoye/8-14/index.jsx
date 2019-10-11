import React, { Component } from 'react'
import Home from "./components/home.jsx"
import store from './store/index.js'
import { Provider } from "react-redux"
export default class Html extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }
}
