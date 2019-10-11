import { ON_CHANGE_INPUT, LOADING, PUSH_BAIDU_RES, ERR_API } from "./actionTypes"
import { getBaidu } from "../../api"
// 改变input
export const onChangeInput = (value) => {
    return {
        type: ON_CHANGE_INPUT,
        value
    }
}
// 改变loading动画
export const loading = (statue) => {
    return {
        type: LOADING,
        statue
    }
}
// 当接口报错了执行的 action
export const errApi = (statue) => {
    return {
        type: ERR_API,
        statue
    }
}
// 将异步接口数据存起来
const pushBaiDures = (value) => {
    return {
        type: PUSH_BAIDU_RES,
        value
    }
}
// 搜索异步接口请求
// 只有把异步请求/函数写在 action 里才叫真正意义上的 redux 异步数据处理,否则都是同步
export const onSearchBaiDuApi = (value) => {
    // 这就是使用异步处理中间件react-thunk固定语法
    return (dispatch, getState) => {
        // dispatch 和 getstate 这两个参是 applyMiddleware 给的
        // console.log(dispatch)
        // console.log(getState())
        // 1. 请求前,需要展示 loading 等待的状态,那么需要 dispatch 一个同步的 action 
        dispatch(loading(true))
        getBaidu(value).then(res => {
            // 2. 接口成功后,发起一个同步的取消 loading 的动作
            dispatch(loading(false))
            // 3. 将数据存到 store 里
            dispatch(pushBaiDures(res.s))
        }).catch(err => {
            console.log(err)
            dispatch(errApi(true))
        })
    }
}

// 使用 redux-thunk 中间件处理异步的好处:
// 集中管理接口,便于维护和迭代,符合 redux 的异步处理的概念
// redux 里的异步概念:
// action 激发后,reducer 立即计算 state,这叫同步,
// action 激发后,reducer 过一段时间在计算 state,这叫异步