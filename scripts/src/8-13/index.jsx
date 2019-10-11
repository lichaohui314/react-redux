import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink } from "react-router-dom"
import Home from "./components/home"
import News from "./components/news"
import store from "./store"
export default class Html extends Component {
    constructor() {
        super()
        // forceUpdate 强制更新会略过 shouldcomponentupdate, 会造成一定的影响,比如说基于 shouldcomponentupdate 的性能优化
        // store.subscribe(() => {
        //     // console.log("强制更新")
        //     this.forceUpdate();
        // })
    }
    render() {
        return (
            <BrowserRouter>
                <NavLink to='/home'>首页</NavLink>
                <NavLink to='/news'>新闻</NavLink>
                <Route path="/home" component={Home} />
                <Route path="/news" component={News} />
            </BrowserRouter>
        )
    }
}
