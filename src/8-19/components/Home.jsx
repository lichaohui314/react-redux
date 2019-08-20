import React, { Component } from 'react'
import { connect } from "react-redux"
import { onChangeinput } from "../store/actionCreators"
class Home extends Component {
    render() {
        const { input, list, loading, err, onChangeInput, onSearch } = this.props
        return (
            <div>
                <label>
                    <input type="text" value={input} onChange={onChangeInput} />
                    <button onClick={onSearch}>搜索</button>
                </label>
                <main>
                    {
                        list.map((item, index) => {
                            return <p key={index}>{item}</p>
                        })
                    }
                </main>
                {
                    loading && <div>
                        <mark>正在请求中</mark>
                    </div>
                }
                {
                    err && <div>
                        <a href="javascript:void(0)">close</a>
                        <mark>请求失败,请稍后再试</mark>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = state => state;
const mapSispatchToProps = (dispatch) => {
    return {
        onChangeInput({ target }) {
            dispatch(onChangeinput(target.value))
        },
        onSearch() {
            dispatch()
        }
    }
}
export default connect(mapStateToProps, mapSispatchToProps)(Home)