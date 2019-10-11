import { CHANGE_INPUT, TOKEN, ADD_ITEM } from "../actionTypes/home"
const token = TOKEN
// 改变 input 的值
export const onChangeInput = (value) => {
    return {
        type: CHANGE_INPUT,
        value,
        token
    }
}
// 添加数据
export const onAddItem = () => {
    return (dispatch, getState) => {
        const value = getState().home.input;
        const list = getState().home.list;
        console.log(getState())
        let item = '';
        if (list.length) {
            item = { id: list[list.length - 1].id + 1, label: value }
        } else {
            item = { id: 1, label: value }
        }
        if (value) {
            dispatch({
                type: ADD_ITEM,
                item,
                token
            })
        }
    }
}