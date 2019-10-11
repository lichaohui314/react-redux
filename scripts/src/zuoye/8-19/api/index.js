const express = require('express');
const app = express();
app.listen(7000, () => console.log("端口7000启动"));
// 跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');// 这里的*表示不拦截,可以响应所有请求
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
        // res.send(200)
        res.sendStatus(200)
    } else {
        // 必须有next方法,才能跳出这个方法,到下一个请求去
        next()
    }
});
const data = require("./data.json")
app.get("/", (req, res) => {
    res.json(data)
})