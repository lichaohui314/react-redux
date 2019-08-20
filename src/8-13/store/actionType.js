const changeTitle = "changeTitle"
const changeInput = "changeInput"
// actionType 只是给 reducer 和 actionCretors 用的,目的是为了防止我们写错,导致的问题,另外好处是全局管理,便于维护
export default {
    // 给title添加时间戳
    CHANGE_TITLE: changeTitle,
    // 改变输入框的值
    CHANGE_INPUT: changeInput
}