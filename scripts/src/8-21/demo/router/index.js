import React, { lazy, Suspense } from 'react'

const Home = lazy(() => import("../components/home"))
const News = lazy(() => import("../components/news"))
const routers = [
    {
        id: 1,
        path: "/home",
        label: "首页",
        component: (props) => (
            <Suspense fallback="正在加载.....">
                <Home {...props} />
            </Suspense>
        )
    },
    {
        id: 2,
        path: "/news",
        label: "新闻",
        component: (props) => (
            <Suspense fallback="正在加载.....">
                <News {...props} />
            </Suspense>
        )
    }
]
export default routers