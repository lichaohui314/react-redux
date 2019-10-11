import React from 'react'
import { connect } from "react-redux"
import { ChangeInputAction, loginAction } from "../store/actionCreator/login"
const Login = (props) => {
    console.log(props)
    const { login, onChangeInput, onLogin } = props
    return (
        <div>
            <form>
                <label className="block">
                    用户名:
                    <input type="text" value={login.user} name="user" onChange={onChangeInput} />
                </label>
                <label className="block">
                    密码:
                    <input type="text" value={login.password} name="password" onChange={onChangeInput} />
                </label>
                <label className="block">
                    <button type="button" onClick={onLogin}>登录</button>
                </label>
                {
                    login.status && <div>登录中...</div>
                }
            </form>
        </div>
    )
}
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        // 修改 input 框
        onChangeInput({ target }) {
            dispatch(ChangeInputAction(target.name, target.value))
        },
        // 登录事件
        onLogin() {
            dispatch(loginAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)