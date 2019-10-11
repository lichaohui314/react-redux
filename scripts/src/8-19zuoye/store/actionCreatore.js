import { CHANGE_INPUT, LOADING, RE_SET } from "./actionTypes"
import axios from "axios"
export const changInputAction = (...data) => {
    console.log(data)
    return {
        type: CHANGE_INPUT,
        data
    }
}
const loading = (status) => {
    return {
        type: LOADING,
        status: true
    }
}
export const submitAction = () => {
    // 在 redux 里使用 redux-thunk 中间件处理异步请求,固有写法
    return (dispatch, getState) => {
        // 请求前发送一个 action

        dispatch(loading(true))
        // 这里写接口请求
        const data = getState()
        axios.get("http://localhost:7000", { params: data }).then(res => {
            console.log(res)
            dispatch(loading(false))
        }).catch(err => {
            dispatch({
                type: "ERROR",
                status: false
            })
        })
    }
}
const reset = () => {
    return {
        type: RE_SET
    }
}
export const reSetAction = () => {
    return (dispatch, getState) => {
        // 请求前派发动作
        dispatch(reset())
    }
}