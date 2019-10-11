import React from "react"
import { connect } from "react-redux"
import { onChangeInputAction, onAddItemAction } from "../../store/actionCreators/homeCreator"
const Home = (props) => {
    const { onChangeInput, onAddItem, input, list } = props
    return <div>
        <label>
            <input type="text" value={input} onChange={onChangeInput} />
            <button onClick={onAddItem}>添加</button>
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
const mapStateToProps = state => state.homeReducer
const mapDispatchToProps = (dispatch) => {
    return {
        // 改变 input 的值
        onChangeInput({ target }) {
            dispatch(onChangeInputAction(target.value))
        },
        // 添加数据
        onAddItem() {
            dispatch(onAddItemAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)