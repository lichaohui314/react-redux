const defaultState = {
    input: "",
    list: []
}
export default (state = defaultState, action) => {
    if (action.token !== "news") return state
    console.log("这个是news的reducer")
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        default:
            return newState
    }
}