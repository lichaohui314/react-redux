import { CHANGE_INPUT } from "./actionTypes.js"
const changeInput = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
}
export {
    changeInput
}