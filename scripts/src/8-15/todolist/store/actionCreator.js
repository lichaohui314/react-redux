import { CHANGE_INPUT } from "./actionTypes"
const changeInput = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
}
export {
    changeInput
}