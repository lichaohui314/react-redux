import React, { Component } from 'react'
import { connect } from "react-redux"
import { onChangeInput, onSearchBaiDuApi, errApi } from "../store/actionCreators"
import "./Home.scss"
class Home extends Component {
    render() {
        const { input, onChangeInput, onSearch, loading, list, err, closeErr } = this.props
        return (
            <div className="home-wrap">
                <label>
                    <input type="text" value={input} onChange={onChangeInput} />
                    <button onClick={() => onSearch(input)}>搜索</button>
                </label>
                <main>
                    {
                        list.map((item, index) => {
                            return <p key={index}>{item}</p>
                        })
                    }
                </main>
                {/* loading 加载提示层 */}
                {
                    loading && <div className="loading">
                        <mark>正在请求中......</mark>
                    </div>
                }
                {
                    err && <div className="err-alert">
                        <a href="javascript:void(0)" onClick={closeErr}>关</a>
                        <mark>接口请求出错,请稍后再试......</mark>
                    </div>
                }
            </div>
        )
    }
}
// 如果仅仅是链接,而 connect 方法中,没有传入任何参数,那么组件的 props 里就会有一个 dispatch
const mapStateToprops = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput({ target }) {
            dispatch(onChangeInput(target.value))
        },
        onSearch(value) {
            if (!value) return false
            // 派发一个异步的 action
            dispatch(onSearchBaiDuApi(value))

        },
        closeErr() {
            dispatch(errApi(false))
        }
    }
}
export default connect(mapStateToprops, mapDispatchToProps)(Home)