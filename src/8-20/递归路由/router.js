export const router = [
    {
        path: "/home",
        label: "首页",
        child: [
            {
                path: "/home/left",
                label: "首页-左侧",
                child: [
                    {
                        path: "/home/left/one",
                        label: "首页-左侧-一"
                    },
                    {
                        path: "/home/left/two",
                        label: "首页-左侧-二"
                    }
                ]
            },
            {
                path: "/home/right",
                label: "首页-右侧"
            }
        ]
    },
    {
        path: "/news",
        label: "新闻"
    }
]