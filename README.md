ps:7-27:95
ps:7-29:100
ps:7-30:100
ps:8-1:85
ps:8-5:90
ps:8-13:95
ps:8-14:110
ps:8-15:110
ps:8-19:110
ps:8-20:95

1. React-router-dom 基础组件有哪些,不少于4个
2. Redux 工作流程
    redux工作流程:组件想要获取state,用ActionCreators创建了一个请求交给store,store借助reducer确认state的状态,reducer返回给store一个结果,store再把这个state转给组件
3. React 中 state 和 props 的相同点和不同点是什么
4. React-redux 核心组件是什么              connect, store, 
5. 生命周期中更新阶段有哪些                 ComponentDidUpdate,render,shouldComponentUpdate
6. Render 方法要想被触发,有几种方式         this.state的更新,强制更新
7. React 中的组件有几种,有什么不同
8. react 中路由拦截有几种方式
9. hoc 组件又叫什么? 简要描述一下           高阶组件
10. 在标签上自定义属性,需要注意什么         自定义的属性要全部小写  
11. 组件间数据传递数据有几种方法            context props redux
12. 条件渲染有哪些写法                      && || !  if()  switch
13. connect 接受哪几个参数,请简要描述一下    两个:mapStateToProps和mapDispatchToProps
14. 对 props 做校检用什么                   PropTypes
15. 性能优化有哪些?                         lazy:组件懒加载 
16. * 什么情况下使用 portals                需要把此标签下的元素插入到另一个标签下

- 1. 如何解决事件中 event 对象在异步中会发生的问题, Redux 在异步请求中使用什么中间件
    会发生属性值的丢失      redux-thunk
- 2. setState 有几种写法, 分别在那种情况下使用
    两种,一个是函数,异步    一个是对象,同步
- 3. creatStore方法创建的store对象下有几个方法
     store下面有4个方法：
        1：getState()、获取reducer里的state
        2：subscribe()、订阅函数，即reducer发送改变时，触发该方法，通知组件去更新。subscribe返回一个注销subscribe方法，用于解绑订阅。
        3：dispatch()、派发一个action到store中，触发reducer去进行对仓库state的操作。该方法接受一个对象值，这个对象就是action，包含一个必须的参数type，还有一个可选的value参数
        4：replaceReducer(nextReducer),用于控制下一个要使用的reducer，为高级api，偏底层。