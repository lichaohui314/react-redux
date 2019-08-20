import { ON_CHANGE_INPUT, LOADING, PUSH_BAIDU_RES, ERR_API } from "./actionTypes"
import { getBaidu } from "../api"
// 改变input
export const onChangeinput = (value) => ({
    type: ON_CHANGE_INPUT,
    value
})
// 将异步接口数据存起来
const pushBaiDures = (value) => ({
    type: PUSH_BAIDU_RES,
    value
})