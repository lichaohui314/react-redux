import { CHANGE_INPUT, PASSWORD_INPUT, CONFIRM_PASSWORD, MAIL_BOX, PHONE_INPUT } from "./actionTypes"
const defaultState = {
    user: {
        input: "",
        redIsShow: false,
        greenIsShow: false
    },
    password: {
        input: "",
        redIsShow: false,
        greenIsShow: false
    },
    confirmPass: {
        input: "",
        redIsShow: false,
        greenIsShow: false
    },
    mailBox: {
        input: "",
        redIsShow: false,
        greenIsShow: false
    },
    phone: {
        input: "",
        redIsShow: false,
        greenIsShow: false
    },
    success: false, // 表示登录状态
    data: ""
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        // 用户名
        case CHANGE_INPUT:
            newState.user.input = action.value
            return newState
        // 用户名失焦
        case "BlurChangeInput":
            if (newState.user.input.length < 6) {
                newState.user.redIsShow = true
                newState.user.greenIsShow = false
            } else {
                newState.user.redIsShow = false
                newState.user.greenIsShow = true
            }
            return newState
        // 密码
        case PASSWORD_INPUT:
            newState.password.input = action.value
            return newState
        // 密码失焦
        case "BlurPasswordInput":
            if (newState.password.input.length <= 0) {
                newState.password.redIsShow = true
                newState.password.greenIsShow = false
            } else {
                newState.password.redIsShow = false
                newState.password.greenIsShow = true
            }
            return newState
        // 确认密码
        case CONFIRM_PASSWORD:
            newState.confirmPass.input = action.value
            console.log(newState)
            return newState
        // 确认密码失焦
        case "BlurconfirmPass":
            if (newState.password.input !== newState.confirmPass.input || newState.confirmPass.input === "") {
                newState.confirmPass.redIsShow = true
                newState.confirmPass.greenIsShow = false
            } else {
                newState.confirmPass.redIsShow = false
                newState.confirmPass.greenIsShow = true
            }
            return newState
        // 邮箱
        case MAIL_BOX:
            newState.mailBox.input = action.value
            return newState
        // 邮箱失焦
        case "BlurMainBox":
            const mail = /^\w+@[a-z0-9]+\.[a-z]+$/i;
            if (mail.test(newState.mailBox.input)) {
                newState.mailBox.redIsShow = false
                newState.mailBox.greenIsShow = true
            }
            else {
                newState.mailBox.redIsShow = true
                newState.mailBox.greenIsShow = false
            }
            return newState
        // 手机号
        case PHONE_INPUT:
            newState.phone.input = action.value
            return newState
        // 手机号失焦
        case "BlurPhoneInput":
            const phone = /^1(3|4|5|6|7|8|9)\d{9}$/;
            if (phone.test(newState.phone.input)) {
                newState.phone.redIsShow = false
                newState.phone.greenIsShow = true
            }
            else {
                newState.phone.redIsShow = true
                newState.phone.greenIsShow = false
            }
            return newState
        // 提交
        case "onSubmit":
            newState.data = action.value
            if (newState.user.greenIsShow === true &&
                newState.password.greenIsShow === true &&
                newState.confirmPass.greenIsShow === true &&
                newState.mailBox.greenIsShow === true &&
                newState.phone.greenIsShow === true) {
                alert("注册成功")
            }
            return newState
        // 重置
        case "onReset":
            return defaultState
        default:
            return newState
    }
}