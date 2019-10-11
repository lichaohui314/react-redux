import React from "react"
import { connect } from "react-redux"
import { NavLink, Prompt, withRouter } from "react-router-dom"
const Nav = (props) => {
    const { status, history } = props
    return (
        <React.Fragment>
            <Prompt message={(location) => {
                if (!status) {
                    if (location.pathname === "/user") {
                        alert("您还没有登录")
                        history.replace("/login")
                        return false
                    } else {
                        return true
                    }
                } else {
                    return true
                }
            }}></Prompt>
            <nav>
                <NavLink to="/home/two">首页</NavLink>
                <NavLink to="/user">用户</NavLink>
                <NavLink to="/login">登录</NavLink>
            </nav>
        </React.Fragment>
    )
}
const mapStateToProps = state => state.homeReducer
export default connect(mapStateToProps)(withRouter(Nav))