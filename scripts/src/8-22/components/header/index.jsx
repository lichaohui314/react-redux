import React from 'react'
import { NavLink, withRouter, Prompt } from "react-router-dom"
const Header = (props) => {
    console.log(props)
    const redirect = () => {
        const patch = props.location.pathname
        const go = props.history.replace
        // TODO:
    }
    return (
        <ul className="nav-link flex">
            <Prompt message={() => {
                const patch = props.location.pathname
                const go = props.history.replace
                // 业务逻辑:如果你没有登录,userReducer 里的 status 为 false ,需要在此拦截
                // 判断这个 status 和 pathname 如果 status 为 false 并且 pathname 不为登录/注册/退出,我们用 go{"/login"} 
            }} />
            <li><NavLink activeClassName="active-link" to="/home">首页</NavLink></li>
            <li><NavLink activeClassName="active-link" to="/news">新闻</NavLink></li>
            <li><NavLink activeClassName="active-link" to="/login">登录</NavLink></li>
            <li><NavLink activeClassName="active-link" to="/register">注册</NavLink></li>
            <li><NavLink activeClassName="active-link" to="/outLogin">退出</NavLink></li>
        </ul>
    )
}
export default withRouter(Header)