import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
// 路由数据
import routers from './router';
export default class Html extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <nav>
                        <ul className="flex">
                            {// 导航
                                routers.map((item) => {
                                    return <li
                                        key={item.id}>
                                        <NavLink to={item.path}>{item.label}</NavLink>
                                    </li>
                                })
                            }
                        </ul>
                    </nav>
                    <main>
                        {// 线路
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
