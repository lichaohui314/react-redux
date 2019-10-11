import React from "react"
import { connect } from "react-redux";
import { changeInputAction, addItemAction } from "../store/actionCreators/news"
const News = (props) => {
    const { input, list, onChangeInput, addItem } = props
    return <div>
        <label>
            <input type="tetx" value={input} onChange={onChangeInput} />
            <button onClick={addItem}>添加</button>
        </label>
        <main>
            {
                list.map((item) => {
                    return <p key={item.id}>{item.label}</p>
                })
            }
        </main>
    </div>
}
const mapStateToProps = state => state.news;
const mapDispatchToProps = (dispatch) => {
    return {
        // 改变 input 的值
        onChangeInput({ target }) {
            dispatch(changeInputAction(target.value))
        },
        // 添加数据
        addItem() {
            dispatch(addItemAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(News)