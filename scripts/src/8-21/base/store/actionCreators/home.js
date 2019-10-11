import { CHANGE_INPUT, TOKEN, ADD_ITEM } from "../actionTypes/home"
// token 全局令牌,以下每个 action 都带上,它最终会被 dispatch 到 reducer 里,reducer 通过它去做拦截判断
const token = TOKEN;
// 改变 input 的值
export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        value,
        token
    }
}
export const addItemAction = () => {
    // 如果 action 返回的是一个对象,他就是一个同步的,如果返回的是一个函数,那么就是使用了redux-thunk 中间件
    return (dispatch, getState) => {
        // 中间件的作用: 可以将逻辑写在这里,避免了在组件中写大量的逻辑,一级避免破坏 reducer
        const value = getState().home.input;
        const list = getState().home.list;
        const item = { id: list[list.length - 1].id + 1, label: value };
        dispatch({
            type: ADD_ITEM,
            item,
            token
        })
    }
}