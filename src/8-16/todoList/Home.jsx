import React from "react"
import { connect } from "react-redux"
const Home = (props) => {
    return <div>
        <input type="text" />
        <h4>未完成列表</h4>
        <ul>
            <li>
                <input type="checkbox" />
                <span>一会儿去开会</span>
            </li>
        </ul>
        {/* 已完成的列表 */}
        <h4>已完成列表</h4>
        <ul>
            <li>
                <input type="checkbox" checked={true} onChange={() => { }} />
                <span>下午课程</span>
            </li>
        </ul>
    </div>
}
export default connect()(Home)