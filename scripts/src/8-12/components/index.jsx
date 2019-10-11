// 路由文件,用来跳展示和留言板的
import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route } from "react-router-dom"
import Home from "./home/index.jsx"
import Liuyan from "./liuyan"
export default class Html extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavLink to="/liuyan">留言板</NavLink>
                <NavLink to="/zhanshi">展示</NavLink>
                <Route path='/liuyan' component={Home}></Route>
                <Route path='/zhanshi' component={Liuyan}></Route>
            </BrowserRouter>
        )
    }
}
