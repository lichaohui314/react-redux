import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route } from "react-router-dom"
import store from "./store"
import { Provider } from "react-redux"
// 路由数据
import routers from "./router"
import "./style.scss"
export default class Html extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ul className="flex">
                        {// 导航 
                            routers.map((item) => {
                                return <li style={{ margin: "0 20px" }}
                                    key={item.id}>
                                    <NavLink to={item.path}>{item.label}</NavLink>
                                </li>
                            })
                        }
                    </ul>
                    <main>
                        {// 线路,组件是通过线路渲染出来的,才叫路由组件,因为该组件未得到路有信息,除此之外,都叫非路由组件,因为他们无法获取路由信息
                            routers.map((item) => {
                                return <Route
                                    key={item.id}
                                    path={item.path}
                                    component={item.component} />
                            })
                        }
                    </main>
                </BrowserRouter>
            </Provider>
        )
    }
}
