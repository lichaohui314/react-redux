import React from "react"
export default (props) => {
    return (
        <main className="Html-Main">
            <h2>正在进行<span>{props.underway.length - props.num.length}</span></h2>
            <ul>
                {
                    props.underway && props.underway.map((item, index) => {
                        return <React.Fragment key={index}>
                            {
                                !item.status && <li>
                                    <input type="checkbox"
                                        checked={item.status}
                                        onChange={({ target }) => {
                                            props.changeChecked(target.checked, index)
                                        }} />
                                    <div contentEditable="true" suppressContentEditableWarning="true">{item.text}</div>
                                    <span onClick={() => props.delItem(index)}>×</span>
                                </li>
                            }
                        </React.Fragment>
                    })
                }
            </ul>
            <h2>已经完成<span>{props.num.length}</span></h2>
            <ul>
                {
                    props.underway && props.underway.map((item, index) => {
                        return <React.Fragment key={index}>
                            {
                                item.status && <li style={{ opacity: "0.5" }}>
                                    <input type="checkbox"
                                        checked={item.status}
                                        onChange={({ target }) => {
                                            props.changeChecked(target.checked, index)
                                        }} />
                                    <div contentEditable="true" suppressContentEditableWarning="true">{item.text}</div>
                                    <span onClick={() => props.delnumItem(index)}>×</span>
                                </li>
                            }
                        </React.Fragment>
                    })
                }
            </ul>
        </main>
    )
}