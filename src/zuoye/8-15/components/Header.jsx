import React from "react"
const Header = (props) => {
    return (
        <header className="Html-Header">
            <div>
                <p>ToDoList</p>
                <input type="text"
                    onKeyPress={props.onhandleEnterKey}
                    placeholder="添加ToDo"
                    value={props.inputvalue}
                    onChange={({ target }) => {
                        props.changeinput(target.value)
                    }} />
            </div>
        </header>
    )
}
export default Header