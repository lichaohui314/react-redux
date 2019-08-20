import { CHANGE_INPUT, PASSWORD_INPUT, CONFIRM_PASSWORD, MAIL_BOX, PHONE_INPUT } from "./actionTypes"
import axios from "axios"
// 修改 用户名 框的值
export const onChangeinput = (value) => ({
    type: CHANGE_INPUT,
    value
})
// 用户名失焦
export const BlurChangeinput = {
    type: "BlurChangeInput"
}
// 修改 密码 框的值
export const onPasswordinput = (value) => ({
    type: PASSWORD_INPUT,
    value
})
// 密码失焦
export const BlurPasswordinput = {
    type: "BlurPasswordInput"
}
// 修改 确认密码 框的值
export const onConfirmPassword = (value) => ({
    type: CONFIRM_PASSWORD,
    value
})
// 确认密码失焦
export const Blurconfirmpass = {
    type: "BlurconfirmPass"
}
// 修改 邮箱 框的值
export const onMainbox = (value) => ({
    type: MAIL_BOX,
    value
})
// 邮箱失焦
export const BlurMainbox = {
    type: "BlurMainBox"
}
// 修改 手机 框的值
export const onPhoneinput = (value) => ({
    type: PHONE_INPUT,
    value
})
// 手机失焦
export const BlurPhoneinput = {
    type: "BlurPhoneInput"
}
// 提交到reducer
const submit = (value) => {
    return {
        type: 'onSubmit',
        value
    }
}

export const onsubmit = (value) => {
    return (dispatch, getState) => {
        console.log(value)
        axios.get('http://localhost:7000').then(res => {
            if (res) {
                dispatch(submit(res.data))
                dispatch(BlurChangeinput)
                dispatch(BlurPasswordinput)
                dispatch(Blurconfirmpass)
                dispatch(BlurMainbox)
                dispatch(BlurPhoneinput)
            }
        })
    }
}