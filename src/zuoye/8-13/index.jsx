import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route } from "react-router-dom"
import Home from "./components/Home"
import Product from "./components/Product"
export default class Html extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavLink to="/home">首页</NavLink>
                <NavLink to="/product">产品</NavLink>
                <Route path="/home" component={Home} />
                <Route path="/product" component={Product} />
            </BrowserRouter>
        )
    }
}
