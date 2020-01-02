import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { RouteI } from '../../infrastructure/interface/commonInterface';
import { RouteWithSubRoutes } from '../../infrastructure/router/routerComponent';

export default function Home(props: RouteI) {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/home/sub1">sub1</Link>
					</li>
					<li>
						<Link to="/home/sub2">sub1</Link>
					</li>
					<li>
						<Link to="/home/sub3">sub1</Link>
					</li>
				</ul>
			</div>
			{props.routes.map((route, index) => (
				<RouteWithSubRoutes {...route} key={index} />
			))}
		</Router>
	);
}
