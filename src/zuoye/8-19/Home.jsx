import React, { Component } from 'react'
import { connect } from "react-redux"
import { onChangeinput, BlurChangeinput, onPasswordinput, BlurPasswordinput, onConfirmPassword, Blurconfirmpass, onMainbox, BlurMainbox, onPhoneinput, BlurPhoneinput, onsubmit } from "./store/actionCreators"
import "./style.scss"
class Html extends Component {
    render() {
        const { user, password, confirmPass, mailBox, phone, onChangeInput, BlurChangeInput, onPasswordInput, BlurPasswordInput, onConfirmPassword, BlurconfirmPass, onMainBox, BlurMainBox, onPhoneInput, BlurPhoneInput, onSubmit, onReset } = this.props
        return (
            <div>
                <form>
                    <label className="label">
                        <span>用户名:</span>
                        <input type="text" value={user.input} onChange={onChangeInput} onBlur={BlurChangeInput} />
                        <span className="span-red">&nbsp;*&nbsp;</span>
                        {
                            user.redIsShow && <span className="span-error">用户名不得小于6位</span>
                        }
                        {
                            user.greenIsShow && <span className="span-righta">正确</span>
                        }
                    </label>
                    <label className="label">
                        <span>密码:</span>
                        <input type="text" value={password.input} onChange={onPasswordInput} onBlur={BlurPasswordInput} />
                        <span className="span-red">&nbsp;*&nbsp;</span>
                        {
                            password.redIsShow && <span className="span-error">密码不得为空</span>
                        }
                        {
                            password.greenIsShow && <span className="span-righta">正确</span>
                        }
                    </label>
                    <label className="label">
                        <span>确认密码:</span>
                        <input type="text" value={confirmPass.input} onChange={onConfirmPassword} onBlur={BlurconfirmPass} />
                        <span className="span-red">&nbsp;*&nbsp;</span>
                        {
                            confirmPass.redIsShow && <span className="span-error">两次密码不一样</span>
                        }
                        {
                            confirmPass.greenIsShow && <span className="span-righta">正确</span>
                        }
                    </label>
                    <label className="label">
                        <span>邮件:</span>
                        <input type="text" value={mailBox.input} onChange={onMainBox} onBlur={BlurMainBox} />
                        <span className="span-red">&nbsp;*&nbsp;</span>
                        {
                            mailBox.redIsShow && <span className="span-error">邮件的格式不正确</span>
                        }
                        {
                            mailBox.greenIsShow && <span className="span-righta">正确</span>
                        }
                    </label>
                    <label className="label">
                        <span>手机:</span>
                        <input type="text" value={phone.input} onChange={onPhoneInput} onBlur={BlurPhoneInput} />
                        <span className="span-red">&nbsp;*&nbsp;</span>
                        {
                            phone.redIsShow && <span className="span-error">手机号不得为空，必须是11位数字</span>
                        }
                        {
                            phone.greenIsShow && <span className="span-righta">正确</span>
                        }
                    </label>
                    <label className="label">
                        <input type="button" onClick={() => onSubmit(this.props)} value="提交" />
                    </label>
                    <label className="label">
                        <input type="button" onClick={onReset} value="重置" />
                    </label>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        // 用户名
        onChangeInput({ target }) {
            dispatch(onChangeinput(target.value))
        },
        BlurChangeInput() {
            dispatch(BlurChangeinput)
        },
        // 密码
        onPasswordInput({ target }) {
            dispatch(onPasswordinput(target.value))
        },
        BlurPasswordInput() {
            dispatch(BlurPasswordinput)
        },
        // 确认密码
        onConfirmPassword({ target }) {
            dispatch(onConfirmPassword(target.value))
        },
        BlurconfirmPass() {
            dispatch(Blurconfirmpass)
        },
        // 邮箱
        onMainBox({ target }) {
            dispatch(onMainbox(target.value))
        },
        BlurMainBox() {
            dispatch(BlurMainbox)
        },
        // 手机号
        onPhoneInput({ target }) {
            dispatch(onPhoneinput(target.value))
        },
        BlurPhoneInput() {
            dispatch(BlurPhoneinput)
        },
        // 提交
        onSubmit(value) {
            dispatch(onsubmit(value))
        },
        // 重置
        onReset() {
            dispatch({
                type: "onReset"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Html)