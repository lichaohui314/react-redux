export const onChangeAction = (data) => ({
    type: "changeinput",
    data
})
export const onClickaction = (status) => {
    return {
        type: "clickaction",
        status
    }
}