import React from 'react'

export const routers = [
	{
		path: '/home',
		label: '首页',
		component: (props) => <div>
			首页{props.children}
		</div>,
		child: [
			{
				path: '/home/left',
				label: '左侧',
				component: () => <div>左侧</div>
			},
			{
				path: '/home/right',
				label: '右侧',
				component: () => <div>右侧</div>
			},
		]
	},
	{
		path: '/about',
		label: '关于',
		component: () => <div>关于</div>
	},
	{
		path: '/news',
		exact: true,
		label: '新闻',
		component: () => <div>新闻</div>,
		child: [
			{
				path: '/news/detail',
				label: '资讯',
				component: () => <div>新闻详情页</div>
			},
			{
				path: '/news/report',
				label: '报道',
				component: () => <div>报道新闻页</div>
			},
		]
	}
]