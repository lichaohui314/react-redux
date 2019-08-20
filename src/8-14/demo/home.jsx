import React, { Component } from 'react'
import { connect } from "react-redux"
class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.name}
                {this.props.inputValue}
                <button onClick={this.props.changeInput}>改变</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(dispatch)
    console.log(ownProps)
    return {
        changeInput() {
            dispatch({
                type: 'changeInput',
                value: new Date().getTime()
            })
            console.log("去dispatch")
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)