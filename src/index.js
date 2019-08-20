import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// 8-14
// import Home from "./8-14/zhihuDemo/index.jsx"

// 8-15
// import Home from "./8-15/style"

// todolist
// import Home from "./zuoye/ToDoList/index.jsx"

// 8-16
// import Home from "./8-16/todoList"

// 8-19
// import Home from "./8-19"

// 8-20
// import Home from "./8-20/router-config"

// 作业
// 8-14
// import Home from "./zuoye/8-14"

// 8-15
// import Home from "./zuoye/8-15"

// 8-19
import Home from "./zuoye/8-19"

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
