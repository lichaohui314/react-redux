import actionTypes from "./actionType.js"
const defaultState = {
    queryValue: "",
    list: [
        { id: 100, text: "1.台风离开" },
        { id: 101, text: "2.留下一地海鲜" },
    ]
}
export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionTypes.CHANGE_INPUT:
            newState.queryValue = action.value
            return newState
        default:
            return state
    }
}