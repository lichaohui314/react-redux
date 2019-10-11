import React, { Component } from 'react'
import Home from './component/home';
import store from "./store"
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
