import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import "./index.scss";
import { reoutes, route } from "./router.js";
export default class Html extends Component {
	render() {
		const renderChild = child => {
			if (!Array.isArray(child)) return "";
			return (
				<ul className="child">
					{child.map(item => {
						return (
							<li className="ul-li" key={item.label}>
								<NavLink to={item.path}>{item.label}</NavLink>
								{item.child && renderChild(item.child)}
							</li>
						);
					})}
				</ul>
			);
		};
		return (
			<BrowserRouter>
				<div className="flex">
					<ul className="ul">
						{reoutes.map(item => {
							return (
								<li
									key={item.label}
									className="ul-li">
									<NavLink
										to={item.path}>
										{item.label}
									</NavLink>
									{renderChild(item.child)}
								</li>
							);
						})}
					</ul>
					<main >
						{route.map(item => {
							return (
								<Route
									key={item.id}
									exact
									path={item.path}
									component={() => <div className="main">{item.label}</div>}
								/>
							);
						})}
					</main>
				</div>
			</BrowserRouter>
		);
	}
}
