import React from "react"
import { connect } from "react-redux";
import "./style.scss"
import { changInputAction, submitAction, reSetAction } from "../store/actionCreatore"
const Home = (props) => {
    const { username, password, repassword, loading, onChangeInput, onSubmit, reSetAction } = props
    return (
        <form className="form-box">
            <label>
                <input type="text"
                    value={username}
                    name="username"
                    onChange={onChangeInput}
                    placeholder="请输入用户名" />
            </label>
            <label>
                <input type="password"
                    value={password}
                    name="password"
                    onChange={onChangeInput}
                    placeholder="请输入密码" />
            </label>
            <label>
                <input type="password"
                    value={repassword}
                    name="repassword"
                    onChange={onChangeInput}
                    placeholder="请确认密码" />
            </label>
            <label>
                <button type="button" onClick={onSubmit} >登录</button>
            </label>
            {
                loading && <label className="loading">
                    <h2>正在请求中...</h2>
                </label>
            }
        </form>
    )
}
const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => {
    return {
        // 改变 input 的值
        onChangeInput({ target }) {
            dispatch(changInputAction(target.name, target.value))
        },
        // 登录事件
        onSubmit() {
            dispatch(submitAction())
        },
        // 重置
        onReSet() {
            dispatch(reSetAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)