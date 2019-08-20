import React, { Component } from 'react'

export default class Son extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        const _this = this
        window.addEventListener("setItem", (event) => {
            // object 和 json 格式上的区别在于, object 的键可以不加引号,但是json一定要键值都加引号
            _this.setState(JSON.parse(event.newvalue))

        })
    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.job}</p>
            </div>
        )
    }
}
