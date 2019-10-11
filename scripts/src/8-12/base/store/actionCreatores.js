// actionCreators 集中管理,便于维护和解耦
import actionTypes from "./actionTypes";

// 假如返回的就是一个纯粹的动作类型,直接返回一个对象即可
const addAction = {
    type: actionTypes.ADD_COUNT
}
// 如果有值的话,需要用函数的形式去接受我们的参数
const addItemAction = (value) => ({
    type: actionTypes.ADD_ITEM,
    value
})
export {
    // 累加计数器动作
    addAction,
    // 添加一条数据到 list
    addItemAction
}
