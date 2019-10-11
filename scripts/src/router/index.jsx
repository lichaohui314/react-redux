import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import { routers } from './router'
import './index.scss'
export default class Html extends Component {
	render() {
		// 二级目录开发
		return (
			<BrowserRouter>
				<ul className='flex class-a-nav'>
					{
						routers.map((item, index) => {
							return <li className='flex-item' key={index}>
								<NavLink to={item.path}>{item.label}</NavLink>
								<ul className='second-nav'>
									{
										item.child && item.child.map((item, index) => {
											return <li key={index}>
												<NavLink to={item.path}>{item.label}</NavLink>
											</li>
										})
									}
								</ul>
							</li>
						})
					}
				</ul>
				{
					routers.map((item, index) => {
						return <React.Fragment key={index}>
							{
								item.exact ? <React.Fragment>
									<Route path={item.path} component={item.component} />
									{
										item.child && item.child.map((item, index) => {
											return <Route key={index} path={item.path} component={item.component} />
										})
									}
								</React.Fragment>
									: <Route path={item.path} component={(props) => {
										console.log(item)
										return <item.component {...props}>
											{
												item.child && item.child.map((item, index) => {
													return <Route key={index} path={item.path} component={item.component} />
												})
											}
										</item.component>
									}} />
							}
						</React.Fragment>
					})
				}
			</BrowserRouter>
		)
	}
}
