import React, { Component } from 'react'
import "./home.scss"
import { connect } from "react-redux"
import { changeInputAction, onSearchAction, onHistoryAction, onDelHistory } from "../store/actionCreators/home"
import { getBaidu } from "../api/index.js"
class Home extends Component {
    render() {
        const { inputValue, onChangeInput, serachList, onSearch, onPushHistoryList, historyList, onDelHistoryList } = this.props
        return (
            <div>
                {/* 搜索栏 */}
                <label className="search-bar">
                    <input type="text"
                        placeholder="搜索"
                        value={inputValue}
                        onChange={onChangeInput} />
                    <button onClick={() => onSearch(inputValue)}>搜索</button>
                </label>
                {/* 列表栏 */}
                <div>
                    <h6>搜索结果</h6>
                    <ul className="search-list">
                        {
                            serachList && serachList.map((item, index) => {
                                return <li onClick={() => onPushHistoryList(index)} key={index}>{item}</li>
                            })
                        }
                    </ul>
                    <hr />
                    <hr />
                    <hr />
                    <h6>历史记录</h6>
                    <ul className="history-list">
                        {
                            historyList && historyList.map((item, index) => {
                                return <li key={index}>
                                    {item}
                                    <p className="H-L-P"
                                        onClick={() => onDelHistoryList(index)}>×</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
// connect 它会在我们传入的两个函数里自动注入 state 和 dispatch
const mapStateToProps = state => state  // 这里的 state 指 reducer 里的 state
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput({ target }) {
            dispatch(changeInputAction(target.value))
        },
        onSearch(value) {
            if (value) {
                getBaidu({ value }).then(res => {
                    if (res.s.length) {
                        dispatch(onSearchAction(res.s))
                    }
                })
            }
        },
        onPushHistoryList(index) {
            dispatch(onHistoryAction(index))
        },
        onDelHistoryList(index) {
            dispatch(onDelHistory(index))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)




// 简写方式
// export default connect(state => state, (dispatch) => {
//     return {
//         onChangeInput({ target }) {
//             dispatch(changeInputAction(target.value))
//         }
//     }
// })(Home)

