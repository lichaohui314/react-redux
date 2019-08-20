import React, { Component } from 'react'
import "./style.scss"
import { connect } from "react-redux"
import { changeInput, searchList, addHistory, delHistory, clearHistory } from "../store/actionCreators/home.js"
import { getBaidu } from "../api"
class Home extends Component {
    render() {
        console.log(this.props)
        const { onChangeInput, inputValue, onSearchAction, searchList, onAddHistoryList, historyList, onDelHistoryList, onClearHistory } = this.props
        return (
            <div>
                {/* 搜索栏 */}
                <label className="search">
                    <input type="text"
                        placeholder="搜索"
                        value={inputValue}
                        onChange={onChangeInput} />
                    <button onClick={() => onSearchAction(inputValue)}>搜索</button>
                </label>
                {/* 搜索列表 */}
                <p className="search_p">搜索结果</p>
                <ul className="searchList">
                    {
                        searchList && searchList.map((item, index) => {
                            return <li key={index} onClick={() => onAddHistoryList(index)}>{item}</li>
                        })
                    }
                </ul>
                {/* 搜索历史 */}
                <div className="flex">
                    <p className="search_p">历史记录</p>
                    <button className="delsearch_btn" onClick={onClearHistory}>清空历史记录</button>
                </div>
                <ul className="historyList">
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
        )
    }
}
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        // 改变 input 的值
        onChangeInput({ target }) {
            dispatch(changeInput(target.value))
        },
        // 搜索事件
        onSearchAction(value) {
            if (value) {
                getBaidu({ value }).then(res => {
                    if (res.s.length) {
                        dispatch(searchList(res.s))
                    }
                })
            }
        },
        // 添加历史记录
        onAddHistoryList(index) {
            dispatch(addHistory(index))
        },
        // 删除该条记录
        onDelHistoryList(index) {
            dispatch(delHistory(index))
        },
        // 清空历史记录
        onClearHistory() {
            dispatch(clearHistory)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)