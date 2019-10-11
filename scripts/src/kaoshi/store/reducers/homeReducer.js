const defaultState = {
    username: "",
    password: "",
    status: false
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "changeinput":
            newState[action.data.name] = action.data.value
            return newState
        case "clickaction":
            newState.status = action.status
            if (newState.username.length >= 4 &&
                newState.password.length >= 4
            ) {
                alert("登录成功")
            } else if (newState.username.length < 6) {
                alert("用户名不能少于6位")
            } else if (newState.password.length < 4) {
                alert("密码不能少于4位")
            }
            return newState
        default:
            return newState
    }
}