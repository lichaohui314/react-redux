import actionTypes from "./actionType.js"
const changeTitleAction = (value) => ({
    type: actionTypes.CHANGE_TITLE,
    value
})
const changeInputAction = (value) => {
    return {
        type: actionTypes.CHANGE_INPUT,
        value
    }
}
export {
    changeTitleAction,
    changeInputAction
}