const defaultState = {
    user: "",
    password: "",
    status: false
}
export default (state = defaultState, action) => {
    if (action.token !== "register") return state
    console.log("register的reducer")
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        default:
            return newState
    }
}