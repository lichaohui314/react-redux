import React from "react"
import { connect } from "react-redux"
import { NavLink, Route } from "react-router-dom"
const Home = (props) => {
    return (
        <div>
            我是首页,谁都可以看
            <nav>
                <NavLink to="/home/two" >首页二级目录</NavLink>
            </nav>
            <Route path="/home/two" component={() => {
                return (
                    <p>首页二级目录内容</p>
                )
            }} />
        </div>
    )
}
export default connect()(Home)