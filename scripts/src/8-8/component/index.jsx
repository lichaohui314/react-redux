import React, { Component } from 'react'
import Son from "./son"

export default class Html extends Component {
    componentDidMount() {
        // 预先存一份
        const Mylocal = localStorage.setItem
        // 做代理事件
        localStorage.setItem = function (key, value) {
            console.log(key, value)
            // 要做自定义事件
            const propty = new Event('setItem')
            console.log(propty)
            // 将值挂载到自定义事件上
            propty.newvalue = value;
            // 将自定义事件注册到全局对象windoe上
            window.dispatchEvent(propty)
            // 借用原生的方法将值传给他,以实现真实的存储
            Mylocal.apply(this, arguments)
        }
        // 使用自定义事件,在全局对象山做监听,如此,所有的组件都可以得到被修改后的数据
        // window.addEventListener('setItem', (event) => {
        //     console.log(event.key, event.value)

        // })
    }
    onSetItem = () => {
        const data = {
            name: "哈哈哈",
            job: "你猜"
        }
        localStorage.setItem("user", JSON.stringify(data))
    }
    render() {
        return (
            <div>
                <mark>使用本地存储来管理全局状态</mark>
                <button onClick={this.onSetItem}>添加</button>
                <Son />
            </div>
        )
    }
}
