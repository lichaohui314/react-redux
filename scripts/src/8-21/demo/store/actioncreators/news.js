// 修改 input 的值
import { CHANGE_INPUT, TOKEN } from "../actionTypes/news"
const token = TOKEN
// 修改 input 的值
export const onChangeInput = (value) => ({
    type: CHANGE_INPUT,
    value,
    token
})