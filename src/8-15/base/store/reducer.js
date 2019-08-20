import { CHANGE_INPUT } from "./actionTypes.js"
const defaultState = {
    inputValue: ""
}

export default (state = defaultState, action) => {
    console.log("redux 触发了", action)
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT:
            newState.inputValue = action.value
            return newState
        default:
            return state
    }
}