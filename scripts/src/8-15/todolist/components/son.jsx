import React from "react"
import { connect } from "react-redux"
import "./son.css"
const Son = (props) => {
    console.log(props)
    const { checkedList, changeChecked } = props
    const color = checkedList.find((item) => {
        if (item.statu) {
            return item
        }
    }).classname
    return (
        <div className={color}>
            {
                checkedList.map((item, index) => {
                    return <div key={item.classname}>
                        <input type="checkbox"
                            checked={item.statu}
                            onChange={({ target }) => {
                                changeChecked(target.checked, index)
                            }} />
                        <div>{item.statu ? item.classname : ""}</div>
                    </div>
                })
            }
        </div>
    )
}
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        changeChecked(value, index) {
            dispatch({
                type: "changeChecked",
                value,
                index
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Son)