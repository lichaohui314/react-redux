import React from "react"
import { connect } from "react-redux"
import { onChangeAction, onClickaction } from "../store/actionCreators/home"
const Home = (props) => {
    const { onChangeInput, username, password, onClickAction, status, history } = props
    return (
        <div className="login-lch">
            <label>
                用户名:<input type="text" name="username" onChange={onChangeInput} value={username} />
            </label>
            <label>
                密码:<input type="password" name="password" onChange={onChangeInput} value={password} />
            </label>
            <label>
                <button type="button" onClick={() => onClickAction(props)}>登录</button>
            </label>
        </div>
    )
}
const mapStateToProps = state => state.homeReducer
const mapDispatchToProsp = (dispatch) => {
    return {
        onChangeInput({ target }) {
            dispatch(onChangeAction({ value: target.value, name: target.name }))
        },
        onClickAction(props) {
            dispatch(onClickaction(true))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProsp)(Home)