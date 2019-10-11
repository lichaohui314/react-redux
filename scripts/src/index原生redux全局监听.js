import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// 8-8 
// import Home from "./8-8/component"

// 8-8redux
// import Home from "./8-8/redux2"

// 8-9
// import Home from "./8-9/demo/index"

// 8-12
// import Home from "./8-12/components"

// 8-13
// import Home from "./8-13"
// import store from "./8-13/store"
// 练习
// import Home from "./Practice"

// 8-13zuoye
import Home from "./zuoye/8-13"
import store from "./zuoye/8-13/store"

const render = () => ReactDOM.render(
    <Home />,
    document.getElementById('root'));
render()
// 注销监听--subscribe 方法返回值就是注销的方法
const unscribe = store.subscribe(render)

// ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
