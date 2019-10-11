import React from "react"
import { connect } from "react-redux"
const User = (props) => {
    const { username } = props
    return (
        <React.Fragment>
            <div>
                <mark>{username}是用户名,来自redux</mark>
                <p>欢迎{username}</p>
            </div>
        </React.Fragment>
    )
}
const mapStateToProps = state => state.homeReducer
export default connect(mapStateToProps)(User)