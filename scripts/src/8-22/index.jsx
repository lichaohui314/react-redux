import React from 'react'
import LoginRegister from "./components/loginRegister"
import Home from "./components/home"
import News from "./components/news"
import OutLogin from "./components/outLogin"
import Header from "./components/header"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import "./style.scss"
import store from "./store"
import { Provider } from "react-redux"
export default props => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path={["/login", "/register"]} component={LoginRegister} />
                    <Route path="/home" component={Home} />
                    <Route path="/news" component={News} />
                    <Route path="/outLogin" component={OutLogin} />
                    <Redirect exact from='/' to="/login" />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}
