import React from "react"
import style from "./index.module.scss"
import { Pel } from "./style.js"
export default () => {
    return <div>
        <p className={`${style.color} `}>
            <span className={style.font30}>我是一行内容</span>
            <Pel>
                <span className="myspan">这是一个p标签</span>
            </Pel>
        </p>
    </div>
}