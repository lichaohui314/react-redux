import actionType from "./actionType.js"
const defaultState = {
    queryValue: '',
    list: [
        { id: 101, text: "1.台风利奇马走了" },
        { id: 102, text: "2.留下一沙滩海鲜" },
        { id: 103, text: "3.村民们都拿着桶" },
        { id: 104, text: "4.在海滩上捡鱼虾" }
    ]
}
export default (state = defaultState, action) => {
    // 1. 拷贝一份 state
    console.log(state)
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionType.QUERY_INPUT:
            newState.queryValue = action.value
            return newState
        case actionType.QUERY_LIST:
            // dilter 方法,返回值是一个新数组,find 方法返回的是该数组里的一项
            newState.list = newState.list.filter((val) => {
                // search: 0或者大于0都表示找到了,其中0表示的是匹配到的下标,-1表示没找到
                if (val.text.search(newState.queryValue) !== -1) {
                    return val
                }
            })
            newState.queryValue = ''
            return newState
        default:
            return state
    }
}