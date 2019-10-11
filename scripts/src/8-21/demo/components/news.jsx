import React from 'react'
import { connect } from "react-redux"
import { onChangeInput } from "../store/actioncreators/news"
const News = (props) => {
    console.log(props)
    const { news, onChangeInput } = props
    return (
        <div>
            <label>
                <input type="text" value={news.input} onChange={onChangeInput} />
            </label>
        </div>
    )
}
const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => {
    return {
        // 修改 input 的值
        onChangeInput({ target }) {
            dispatch(onChangeInput(target.value))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(News)