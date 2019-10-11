import React from 'react'
import { connect } from "react-redux"
import { onChangeInput, onAddItem } from "../store/actioncreators/home"
const News = (props) => {
    console.log(props)
    const { home, onChangeInput, onAddItem } = props
    return (
        <div>
            <label>
                <input type="text" value={home.input} onChange={onChangeInput} />
            </label>
            <label>
                <button onClick={onAddItem}>添加</button>
            </label>
            <main>
                {
                    home.list && home.list.map((item) => {
                        return <p key={item.id}>{item.label}</p>
                    })
                }
            </main>
        </div>
    )
}
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        // 改变 input 的值
        onChangeInput({ target }) {
            dispatch(onChangeInput(target.value))
        },
        // 添加数据
        onAddItem() {
            dispatch(onAddItem())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(News)