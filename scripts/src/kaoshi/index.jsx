import React, { Component } from 'react'
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import store from "./store"
import Home from "./components/home"
import User from "./components/user"
import Login from "./components/login"
import Nav from "./components/nav"
import "./style.scss"
export default class Html extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Nav />
                    <main>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/user" component={User} />
                            <Route path="/login" component={Login} />
                            <Redirect to="/home/two" ></Redirect>
                        </Switch>
                    </main>
                </BrowserRouter>
            </Provider>
        )
    }
}
