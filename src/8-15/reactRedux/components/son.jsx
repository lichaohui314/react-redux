import React from "react"
import { connect } from "react-redux"
const Son = (props) => {
    /*
     * 当前组件作为子组件,在不需要知道 redux 的情况下,
     * 需要我们在父组件中使用: bindActionCreators 方法,将 actionCreator 进行包装,由父组件通过 props 传递进来
     * bindActionCreators 接受两个参数:
     *  1. 参数一: 是我们的 actionCreator, 他可以是一个单独的,也可以是一组 actionCreator: 如果传入一组的话,需要放在对象里,那么返回的也是一个包装后的对象,如果只是一个函数,则返回一个函数
     *  2. 参数二: 是 dispatch 它会被 bindActionCreators 封装到我们返回值里的方法里,这样再使用返回的函数的时候,直接调用即可
     */
    console.log(props)
    return (
        <div>
            <input type="text" value={props.inputvalue} onChange={({ target }) => {
                props.sonfn.changeInput(target.value)
            }} />
            <button onClick={() => { props.sonfn.changeInput("123456") }}>触发一下</button>
        </div>
    )
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(Son)