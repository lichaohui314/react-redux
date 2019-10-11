import React, { lazy, Suspense } from 'react'

const Login = lazy(() => import("../component/login"))
const Register = lazy(() => import("../component/register"))
const routers = [
    {
        id: 1,
        path: "/login",
        label: "登录",
        component: (props) => (
            <Suspense fallback="正在加载.....">
                <Login {...props} />
            </Suspense>
        )
    },
    {
        id: 2,
        path: "/register",
        label: "注册",
        component: (props) => (
            <Suspense fallback="正在加载.....">
                <Register {...props} />
            </Suspense>
        )
    }
]
export default routers