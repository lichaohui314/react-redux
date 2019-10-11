import actionTypes from "./actionTypes.js"
const defaultState = {
    inputValue: '',
    list: []
}
export default (state = defaultState, action) => {
    // 1. 拷贝一份 state
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionTypes.CHANGE_INPUT:
            newState.inputValue = action.value
            return newState;
        case actionTypes.ADD_ITEM:
            // 如果 inputvalue 是空的,就不要给他添加
            if (newState.inputValue) {
                newState.list.push(newState.inputValue);
            }
            // 添加完以后,将 inputvalue 值清空掉
            newState.inputValue = ''
            return newState;
        case actionTypes.DEL_ITEM:
            newState.list.splice(action.index, 1);
            return newState
        default:
            return state
    }
}