import { ON_CHANGE_INPUT } from "./actionTypes"
const defaultState = {
    input: "",
    list: [],
    loading: false,
    err: false
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ON_CHANGE_INPUT:
            newState.input = action.value
            return newState
        default:
            return newState
    }
}