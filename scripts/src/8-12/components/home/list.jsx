import React from "react"
// 渲染内容添加组件
export default (props) => {
    return <ul>
        {
            props.list && props.list.map((item, index) => {
                return <li key={index}>
                    {item}<button onClick={() => {
                        props.removerItem(index)
                    }}>删除</button>
                </li>
            })
        }

    </ul>
}