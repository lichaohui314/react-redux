import { CHANGE_INPUT } from "./actionTypes"
const defaultState = {
    inputValue: "",
    checkedList: [{
        statu: false,
        classname: "red"
    }, {
        statu: false,
        classname: "blue"
    }, {
        statu: false,
        classname: "yello"
    }]
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "changeChecked":
            const index = action.index
            const value = action.value
            newState.checkedList.forEach((item, _index) => {
                if (_index === index) {
                    item.statu = value
                } else {
                    item.statu = false
                }
            })
            return newState
        case CHANGE_INPUT:
            newState.inputValue = action.value
            return newState
        default:
            return state
    }
}