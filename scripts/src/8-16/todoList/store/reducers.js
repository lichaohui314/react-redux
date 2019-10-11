const defaultState = {
    input: "",
    // 未完成列表
    beingList: [],
    // 已完成列表
    completeList: []
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        default:
            return newState
    }
}