import React from "react"
import { NavLink, withRouter, Prompt } from "react-router-dom"
import { connect } from "react-redux"
// import routers from "../router"
const Nav = (props) => {
    console.log("ownProps")
    return (
        <nav>
            <Prompt message={(location) => {
                // 根据该组件可以做路由拦截
                if (location.pathname === "/news") {
                    return false
                } else {
                    return true
                }
            }}></Prompt>
            <ul className="flex">
                {// 导航 
                    props.routers.map((item) => {
                        return <li style={{ margin: "0 20px" }}
                            key={item.id}>
                            <NavLink to={item.path}>{item.label}</NavLink>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}
// withRouter 路由里的高级函数,使用它包裹非路由组件,可以使用该组件得到路由信息
// null 是占位符,如果该组件不需要传入一些参数,可以使用 null 来占位
const mapDispatchToProps = (dispatch, ownProps) => {
    // 这个地方可以做路由拦截
    const user = false
    // 这里写的好处,防止用户在地址栏输入跳转,如果该组件是一个路由组件的话,我们可以直接使用路由对象里的方法去做跳转
    if (window.location.pathname === "/news" && !user) {
        // 这里让他去跳转
        window.location.href = "/home"
    }
    return {}
}
export default connect(null, mapDispatchToProps)(withRouter(Nav))