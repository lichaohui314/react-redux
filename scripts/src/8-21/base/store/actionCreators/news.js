import { CHANGE_INPUT, TOKEN, ADD_ITEM } from "../actionTypes/news"
import axios from "axios"
const token = TOKEN
// 修改 input 的值
export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        value,
        token
    }
}
// 添加一条数据到list
const addItem = (value) => {
    return {
        type: ADD_ITEM,
        value,
        token
    }
}
export const addItemAction = () => {
    return (dispatch, getState) => {
        const value = getState().news.input
        const list = getState().news.list
        console.log(getState())
        let item = { id: 1, label: value }
        // length 为0,表示false
        if (list.length) {
            // item = { id: list[list.length - 1].id + 1, label: value }
            item.id = list[list.length - 1].id + 1
        }
        // 模拟接口
        axios.get("/", { input: value }).then(res => {
            dispatch(addItem(item))
        })
    }
}