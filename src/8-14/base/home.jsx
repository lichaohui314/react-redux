import React, { Component } from 'react'
import { connect } from "react-redux"
class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.name}
                <input type="text" value={this.props.inputValue} onChange={this.props.changeInput} />
                <div dangerouslySetInnerHTML={{ __html: this.props.inputValue }}></div>
            </div>
        )
    }
}
/*
 * 1. connect 是一个高级函数,它返回一个方法,所以要再调用一下,
    参数: 
        mapStateToProps: 函数,返回的是 redux 里的 state 值【可选】
        mapDispatchToPrsps: 函数,返回的是派发的 action 动作【可选】
 * 如果不传参,只是用 connect 连接,那么 props 里只会有一个 dispatch
 */
const mapStateToProps = (state) => {
    // 该方法里的 state 来自于 redux-reducer 里的 state
    return state
};
const mapDispatchToProps = (dispatch, ownProps) => {
    // 一旦我们使用了 mapDispatchToPrsps 传入了方法,那么默认连接器 connect 给的 dispatch 就会消失
    /*
     * 该方法接受两个参数:
        dispatch: 来自实例化 store 的 dispatch 方法,用户封装派发的自定义方法
        ownProps: 来自父组件给的 props: 也叫做只有属性,比如在路由里,这个对象就会包含路由的数据信息
     */
    return {
        changeInput({ target }) {
            dispatch({
                type: 'changeInput',
                value: target.value
            })
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)