export const reoutes = [
	{
		path: "/form",
		label: "表单插件",
		child: [
			{
				path: "/form/calendar",
				label: "日期选择器"
			},
			{
				path: "/form/color",
				label: "颜色选择器",
				child: [
					{
						path: "/form/color/select",
						label: "联动下拉列表"
					},
					{
						path: "/form/color/verification",
						label: "表单验证"
					}
				]
			}
		]
	},
	{
		path: "/image",
		label: "图像插件"
	},
	{
		path: "/often",
		label: "常用插件",
		child: [
			{
				path: "/often/accordion",
				label: "手风琴导航"
			},
			{
				path: "/often/slide",
				label: "滑动定位"
			}
		]
	}
];
export const route = [
	{
		id: 1,
		path: "/form",
		label: "表单插件"
	},
	{
		id: 2,
		path: "/form/calendar",
		label: "日期选择器"
	},
	{
		id: 3,
		path: "/form/color",
		label: "颜色选择器"
	},
	{
		id: 4,
		path: "/form/color/select",
		label: "联动下拉列表"
	},
	{
		id: 5,
		path: "/image",
		label: "图像插件"
	},
	{
		id: 6,
		path: "/often",
		label: "常用插件"
	},
	{
		id: 7,
		path: "/often/accordion",
		label: "手风琴导航"
	},
	{
		id: 8,
		path: "/often/slide",
		label: "滑动定位"
	},
];
