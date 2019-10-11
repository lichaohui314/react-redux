import React from "react"
import { connect } from "react-redux"
import { changeInputAction, addItemAction } from "../store/actionCreators/home"
const Home = (props) => {
    const { home, onChangeInput, onAddItem } = props;
    return <div>
        <label>
            <input type="text" value={home.input} onChange={onChangeInput} />
        </label>
        <label>
            <button onClick={onAddItem} >添加</button>
        </label>
        <div>
            {
                home.list.map(item => {
                    return <p key={item.id}>{item.label}</p>
                })
            }
        </div>
    </div>
}
const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch, ownProps) => {
    // ownProps 里面存放的是自有属性,即显式传入的 props
    return {
        // 改变 input 的值
        onChangeInput({ target }) {
            dispatch(changeInputAction(target.value))
        },
        // 添加一条数据
        onAddItem() {
            dispatch(addItemAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)