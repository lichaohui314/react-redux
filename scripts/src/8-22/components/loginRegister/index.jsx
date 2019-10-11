import React from "react"
import "./index.scss"
import { connect } from "react-redux"
import { onSubmitAction } from "../../store/actionCreators/userCreator"
class LoginReg extends React.Component {
    constructor(props) {
        super(props)
        // 该组件拥有自己的状态,只有当接口成功之后再把相应的值存到 redux 中
        this.state = {
            username: "18035852945",
            password: "123456",
            reRassword: "123456"
        }
    }
    // 用于判断该组件时哪个
    flag = () => {
        // 从 props 结构
        const { match } = this.props
        const flag = match.path === "/login" ? false : true
        return flag
    }
    // 改变 input 值
    changeInput = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }
    islogin = () => {
        // 从 props 解构出 reducer 的值
        const { history } = this.props
        let status = ""
        if (JSON.parse(sessionStorage.getItem("newState"))) {
            status = JSON.parse(sessionStorage.getItem("newState")).status
        } else {
            status = false
        }
        // 当登陆成功后,让页面跳到首页
        if (status) {
            alert("登录成功")
            history.replace("/home")
        }
    }
    componentDidMount() {
        this.islogin()
    }
    componentDidUpdate() {
        this.islogin()
    }
    render() {
        const flag = this.flag()
        // 从 state 结构
        const { username, password, reRassword } = this.state
        return (
            <form className="form-box" >
                <label>
                    <input type="text"
                        name="username"
                        value={username}
                        onChange={this.changeInput}
                        placeholder="用户名" />
                </label>
                <label>
                    <input type="password"
                        name="password"
                        value={password}
                        onChange={this.changeInput}
                        placeholder="密码" />
                </label>

                {flag && (
                    <label>
                        <input type="password"
                            name="reRassword"
                            value={reRassword}
                            onChange={this.changeInput}
                            placeholder="确认密码" />
                    </label>
                )}
                <label>
                    <button onClick={this.onSubmit} type="button">
                        {flag ? "注册" : "登录"}
                    </button>
                </label>
            </form >
        )
    }
    // 提交
    onSubmit = () => {
        const { username, password, reRassword } = this.state
        // 判断的时候,我们需要根据路由信息,来确定是那个组件类型,[注册/登录],然后进行热更新
        // this.flag:true 表示注册页面,否则就是登录
        // 真实的项目中,一些配置需要单独提取出来,为的是可观和易维护及迭代
        // Object.freeze: es6 里冻结对象的方法,使用它,代码不可以修改,特别适合常量
        const LENGTH = Object.freeze({
            USER_LENGTH: 2,
            PASSWORD: 4
        })
        // 从props结构出我们的派发事件
        const { onSubmit } = this.props
        if (this.flag()) {
            if (username &&
                username.length >= LENGTH.USER_LENGTH &&
                password &&
                password.length >= LENGTH.PASSWORD &&
                reRassword === password) {
                onSubmit({
                    eventType: "register",
                    username,
                    password,
                    reRassword
                })
            } else if (!username || username.length < LENGTH.USER_LENGTH) {
                alert("用户名不许为空,且不许小于" + LENGTH.USER_LENGTH + "位")
            } else if (!password || password.length < LENGTH.PASSWORD) {
                alert("密码不许为空,且不许小于" + LENGTH.PASSWORD + "位")
            } else if (!reRassword || reRassword !== password) {
                alert("两次密码不一致")
            }
            // 上面是注册的验证
        } else {
            // 验证登录
            if (username &&
                username.length >= LENGTH.USER_LENGTH &&
                password &&
                password.length >= LENGTH.PASSWORD) {
                onSubmit({
                    eventType: "login",
                    username,
                    password
                })
            } else if (!username || username.length < LENGTH.USER_LENGTH) {
                alert("用户名不许为空,且不许小于" + LENGTH.USER_LENGTH + "位")
            } else if (!password || password.length < LENGTH.PASSWORD) {
                alert("密码不许为空,且不许小于" + LENGTH.PASSWORD + "位")
            }
        }

    }
}
const mapStateToProps = state => state.userReducer
const mapDisparchToProps = (dispatch) => {
    return {
        onSubmit(data) {
            // 
            dispatch(onSubmitAction(data))
        }
    }
}
export default connect(mapStateToProps, mapDisparchToProps)(LoginReg)