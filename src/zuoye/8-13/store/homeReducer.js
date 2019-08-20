import actionType from "./actionType.js"
const defaultState = {
    inputValue: '',
    list: []
}
export default (state = defaultState, action) => {
    console.log(action)
    // 1. 拷贝一份 state
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionType.CHANGE_INPUT:
            newState.inputValue = action.value
            return newState;
        case actionType.CHANGE_DEL:
            newState.list = []
            return newState;
        case actionType.CHANGE_ADD:
            // 如果 inputvalue 是空的,就不要给他添加
            if (newState.inputValue) {
                newState.list.push(newState.inputValue);
            }
            // 添加完以后,将 inputvalue 值清空掉
            newState.inputValue = ''
            return newState;
        case actionType.DEL_ITEM:
            newState.list.splice(action.index, 1);
            return newState
        default:
            return state
    }
}